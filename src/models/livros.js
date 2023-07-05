import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String
});

const Books = mongoose.model('Books', BooksSchema)

export default Books;