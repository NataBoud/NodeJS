const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
 
router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deletBook);
router.get("*", bookController.parDefautPage);

module.exports = router;