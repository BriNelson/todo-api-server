import mongoose from 'mongoose'
const { Schema } = mongoose
const todoSchema = new Schema({
  title: String,
  complete: Boolean,
  category: String

})

export { todoSchema }
