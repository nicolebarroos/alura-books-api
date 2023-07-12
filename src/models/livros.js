import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        description: String,
        category: String,
        image: String,
        // users: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Users"
        //     }
        // ]
    }
);

const Books = mongoose.model('Books', BooksSchema)

export default Books;