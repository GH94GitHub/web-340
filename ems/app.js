var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
const { response } = require('express');

// Model
var Employee = require('./models/employee')

// Connect
var mongoDB = 'mongodb+srv://ghend:Ub6iwve7@buwebdev-cluster-1.qqxjy.mongodb.net/test?authSource=admin&replicaSet=atlas-njj3c5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});



//Application
var app = express();

// Use
app.use(logger('short'));
app.use(express.static(__dirname + '/public'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrf({cookie: true}));
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home Page'
  });
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Page',
    csrfToken: req.csrfToken(),
    message: "Enter a new Employee"
  });
});

app.get('/list', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) throw err;

    res.render('list', {
      title: 'List Employees',
      employees: employees
    });
  });
});

app.get('/view/:empFirstName', function(req,res) {
  var empFirstName = req.params.empFirstName;
  Employee.find({'firstName':empFirstName}, function(err, employees) {
    if (err) throw err;
    if (employees.length > 0) {
      res.render('view', {
        title: "Employee Record",
        employees: employees
      });
    }
  });
});

app.post("/process", function(req, res) {
  if(!req.body.txtName) {
    res.status(400).send("Entry must have a name");
    return;
  }
  var employeeFullName = req.body.txtName.trim();
  var nameSplit = employeeFullName.split(' ');
  var firstName = nameSplit[0];
  var lastName = nameSplit[1];


  var employee = new Employee({
    firstName: firstName,
    lastName: lastName
  });

  employee.save(function(err) {
    if (err) throw err;
    console.log('Employee saved successfully!')
  });
  res.redirect("/");
});

app.listen(8080, function() {
  console.log('App started on port 8080');
});
