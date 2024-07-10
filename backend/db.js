const mongoose = require('mongoose')

/*
        {
            title: String,
            description: String,
            completed: Boolean

        }
*/

mongoose.connect("mongodb connection url")
const todoSchema = mongoose.Schema({
    title : String , 
    description : String , 
    completed : Boolean , 
})

//A Mongoose model is a class that acts as an interface between a database and a Mongoose schema,
// which defines the structure of documents
const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo :todo
}