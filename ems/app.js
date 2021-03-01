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
    message: "Enter a new Employee."
  });
});

app.post("/process", function(req, res) {
  console.log(req.body.txtName);
  res.redirect("/");
});

app.listen(8080, function() {
  console.log('App started on port 8080');
});
