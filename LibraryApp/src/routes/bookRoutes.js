const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
 
router.get('/livres', bookController.getAllBooks);
router.post('/add-livre', bookController.addBook);
router.put('/update/:id', bookController.updateBook);
router.delete('/delete/:id', bookController.deletBook);
router.get("*", bookController.parDefautPage);

module.exports = router;