var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var mongoDB = 'mongodb+srv://ghend:Ub6iwve7@buwebdev-cluster-1.qqxjy.mongodb.net/ems?retryWrites=true&w=majority'

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connected error: '));
db.once('open', function() {
    console.log('Application connected to mLab MongoDB instance')
});


var app = express();

app.use(logger('dev'));

app.listen(5000, function() {
  console.log('App listening on port 5000');
});
