const mongoose = require('mongoose')
//mongoose:a Node. js-based Object Data Modeling (ODM) library for MongoDB
//A Mongoose Schema defines the structure and property of the document in the MongoDB collection. 
//object 'student' creation example:
// const student ={
//  firstName: 'Kaleb',
//    grade: sophomore
//};

const todoSchema2 = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDoSchemaMongo2', todoSchema2)
// going to use the module at ToDoController.js
// ToDoSchemaMongo is the collection name in M