import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    title: String,
    complete: Boolean,
    category: String,


})

module.exports = mongoose.model('Todo', todoSchema)