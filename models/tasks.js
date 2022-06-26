const mongoose = require('mongoose');
const schema = new mongoose.Schema({title: String});

// this schema is for tasks "document" and we have to declare it for mongoose
module.exports  = mongoose.model('Task', schema); // each task by itself is a document