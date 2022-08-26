const mongoose = require('mongoose')
// added
const Schema = mongoose.Schema

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"]
    },
    author:{ 
        type: String,
        required: [true, "Author is required"]
    },
    pages:{
        type: Number,
        required:[true, "Number of pages is required"]
    },
    image:{
        type: String,
        require:[true, "Image is required"]
    },
    completed: Boolean,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports.Book = mongoose.model('Book', BookSchema);
module.exports.BookSchema = BookSchema;