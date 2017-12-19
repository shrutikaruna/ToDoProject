var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
priorities = ['Low', 'Medium', 'High', 'Critical'];
var TodoSchema = new Schema({
userId:{type: Schema.Types.ObjectId, required:true },
todo:{type: String, required:true },
description:{type: String, required:true, unique:true },
dateCreated:{type: Date, default: Date.now },
dateDue:{type: Date, default: Date.now},
completed: {type:Boolean, default: false},
priority :{type:String, enum:priorities},
file:
    {filename: String, originalName: String, dateUploaded: Date}
});

module.exports = Mongoose.model('todos', TodoSchema);