const express = require('express');
const router = express.Router();

const BookController = require('../controller/BookController');

// get all categories
router.get('/api/books', BookController.viewBook);

// create New category
router.post('/api/books', BookController.addBook);

// get a single category
router.get('/api/books/:id', BookController.viewSingleBook);

// Update a category
router.put('/api/books/:id', BookController.updateBook);

// delete a category
router.delete('/api/books/:id', BookController.deleteBook);

module.exports = router;
