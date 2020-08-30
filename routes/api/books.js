const router = require('express').Router();
const booksController = require('../../controllers/booksController');

<<<<<<< HEAD
//Matches with 'api/books'
=======
// Matches with '/api/books'
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

<<<<<<< HEAD
//Matches with 'api/books/:id'
router
    .route('/:id')
    .delete(booksController.remove);

module.exports = router;
=======
// Matches with /api/books/:id
router
    .route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);


modules.exports = router;
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
