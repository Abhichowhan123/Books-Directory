import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const bookSchema= mongoose.Schema({
    bookname:String,
    author:String,
    language:String,
    publisher:String

})

autoIncrement.initialize(mongoose);
bookSchema.plugin(autoIncrement.plugin,'book');

const book =  mongoose.model('book',bookSchema);
export default book;