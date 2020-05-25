const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'monogodb://localhost/googlebooks'
);

const bookSeed = [
    {
        title: 'The Bible',
        author: 'God',
        description: 'A fairytail book about a jewish carpinter',
        image: '',
        Link: ''
        
    },
]

db.Book
    .remove({})
    .then({} => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(`${data.result.n} + records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
    
