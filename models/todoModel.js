import pkg from 'mongoose';
const { model, Schema } = pkg;



const todoSchema = new Schema({
    title: String,
    complete: Boolean,
    category: String,


})


export default model("todoSchema", todoSchema);