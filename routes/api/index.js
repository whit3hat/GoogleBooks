const router = require('express').Router();
const booksRoutes = require('./books');

//book routes
router.use('/books', booksRoutes);

module.exports = router;