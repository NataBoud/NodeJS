const express = require("express");
const router = express.Router();

// Text HTML
router.get("/bienvenue", (req, res) => {
  res.send("<h1>Bienvenue sur votre application Express!</h1>");
});

// Contenu JSON
router.get("/info", (req, res) => {
  const jsonData = {
    nom: "John Doe",
    age: 25,
    ville: "Paris"
  };
  res.json(jsonData);
  
});

// Code de statut personnalisé
router.get("/acces-interdit", (req, res) => {
  res.status(403).send("<h1>Acces interdit ! - Code 403</h1>");
});


// Routes par défaut
router.get("*", (req, res) => {
  res.status(404).send("Oups, on dirait qu'il n'y a rien ici");
});

module.exports = router;
