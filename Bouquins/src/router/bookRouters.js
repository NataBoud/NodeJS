const express = require("express");
const router = express.Router();

// Importez les controllers associés
const bouquinController = require('../controller/bouquinController');

router.get('/', bouquinController.homePage);
router.get('/livres', bouquinController.livrePage);
router.get('/livres/:id', bouquinController.detailLivrePage);
router.get('/ajout-livre', bouquinController.ajouterLivrePage);
router.get('/redirect', bouquinController.redirectPage);
router.get('*', bouquinController.parDefautPage);

module.exports = router;


