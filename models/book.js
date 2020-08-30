const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true },
    description: String,
    image: { data: Buffer, contentType: String},
    Link: String,
});

const Book = mongoose.model('Book', BookSchema);
=======
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true},
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26

module.exports = Book;