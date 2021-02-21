var mongoose = require('mongoose');

// Schema
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// Model - Map
var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
