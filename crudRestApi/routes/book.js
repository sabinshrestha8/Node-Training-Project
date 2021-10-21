const express = require('express');
const router = express.Router();

const BookController = require('../controller/BookController');

// get all books
router.get('/api/books', BookController.viewBook);

// create New book
router.post('/api/books', BookController.addBook);

// get a single book
router.get('/api/books/:id', BookController.viewSingleBook);

// Update a book
router.put('/api/books/:id', BookController.updateBook);

// delete a book
router.delete('/api/books/:id', BookController.deleteBook);

module.exports = router;
