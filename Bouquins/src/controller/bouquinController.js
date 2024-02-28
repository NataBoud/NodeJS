// controllers/bouquinController.js

const fs = require("fs");
const path = require("path");
const jsonFilePath = path.join(__dirname, "..", "..", "data", "livres.json");
let livresData = [];
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Erreur de lecture du fichier JSON:", err);
    throw err;
  }
  livresData = JSON.parse(data);
});

// Fonction pour la route "/"
const homePage = (req, res) => {
  res.render("index", {
    title: "BOUQUINS",
    message: "Bienvenue sur mon site",
  });
};

// Fonction pour la route '/about'
const livrePage = (req, res) => {
  res.json(livresData);
};

// Fonction pour la route '/livres/:id'
const detailLivrePage = (req, res) => {
  const userId = req.params.id;
  const livreDetails = livresData.livres_developpement.find(
    (l) => l.id === parseInt(userId)
  );
  if (!livreDetails) {
    return res.status(404).json({ error: "Livre non trouvé" });
  }
  res.json(livreDetails);
};

// Fonction pour la route '/ajout-livre'
const ajouterLivrePage = (req, res) => {
    res.send("<h1>Ajouter un livre</h1>");
  };

// Fonction pour la route '/redirect'
const redirectPage = (req, res) => {
    res.redirect("/");
  };

// Fonction pour la route '/*'
const parDefautPage = (req, res) => {
    res.status(404).send("Oups, on dirait qu'il n'y a rien ici");
  };

// Export des fonctions pour les rendre disponibles à d'autres modules
module.exports = {
  homePage,
  livrePage,
  detailLivrePage,
  ajouterLivrePage,
  redirectPage,
  parDefautPage
};
