var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
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

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home Page'
  });
});

app.listen(8080, function() {
  console.log('App started on port 8080');
});
