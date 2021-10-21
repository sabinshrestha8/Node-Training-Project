const express = require('express');
const router = express.Router();

const CategoryController = require('../controller/CategoryController');

// get all categories
router.get('/api/categories', CategoryController.viewCategory);

// create New category
router.post('/api/categories', CategoryController.createCategory);

// get a single category
router.get('/api/categories/:id', CategoryController.viewSingleCategory);

// Update a category
router.put('/api/categories/:id', CategoryController.updateCategory);

// delete a category
router.delete('/api/categories/:id', CategoryController.deleteCategory);

module.exports = router;