const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    task: {type: String, required: true}
});

module.exports = mongoose.model('Todo', todoSchema);