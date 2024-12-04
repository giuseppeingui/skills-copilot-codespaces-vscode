// Create web server 
// Create route for comments
// Create route for comments/new
// Create route for comments/:id
// Create route for comments/:id/edit
// Create route for comments/:id/update
// Create route for comments/:id/delete

// Require modules
const express = require('express');
const router = express.Router();

// Require controllers
const commentsController = require('../controllers/comments');

// Create route for comments
router.get('/', commentsController.index);

// Create route for comments/new
router.get('/new', commentsController.new);

// Create route for comments/:id
router.get('/:id', commentsController.show);

// Create route for comments/:id/edit
router.get('/:id/edit', commentsController.edit);

// Create route for comments/:id/update
router.put('/:id', commentsController.update);

// Create route for comments/:id/delete
router.delete('/:id', commentsController.delete);

module.exports