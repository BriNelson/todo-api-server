import mongoose from 'mongoose'
const { Schema } = mongoose
const todoSchema = new Schema({
    title: String,
    complete: Boolean,
    category: String,


})

module.exports = mongoose.model('TodoData', todoSchema)