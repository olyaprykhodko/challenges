const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  solution: String,
  topic: String,
});

module.exports = mongoose.model('Task', TaskSchema);
