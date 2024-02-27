const express = require("express");
const app = express();

// dossier publique
app.use(express.static("public"));
// Importez le routeur


const mainRouter = require("./router/routes")

// Utilisez le routeur pour gérer les routes
app.use('/', mainRouter);


// port d'ecoute
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le server en écoute sur le port ${PORT}`);
});

