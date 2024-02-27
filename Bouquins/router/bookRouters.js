const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "..", "data", "livres.json");
let livresData = [];

fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Erreur de lecture du fichier JSON:", err);
    throw err; 
  }
  livresData = JSON.parse(data);
});

// Livres
router.get("/livres", (req, res) => {
  res.json(livresData);
});

// Livre par Id
router.get("/livres/:id", (req, res) => {
  const userId = req.params.id;
  const livreDetails = livresData.livres_developpement.find(
    (l) => l.id === parseInt(userId)
  );
  if (!livreDetails) {
    return res.status(404).json({ error: "Livre non trouvé" });
  }
  res.json(livreDetails);
});


router.get("/ajout-livre", (req, res) => {
  res.send("<h1>Ajouter un livre</h1>");
});

router.get("/redirect", (req, res) => {
  res.redirect("/");
});

// Routes par défaut
router.get("*", (req, res) => {
  res.status(404).send("Oups, on dirait qu'il n'y a rien ici");
});

module.exports = router;
