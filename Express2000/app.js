const express = require("express");
const app = express();
const mongoose = require("mongoose");

// dossier publique
app.use(express.static("public"));
// Importez le routeur

const mainRouter = require("./router/routes");
// Utilisez le routeur pour gérer les routes
app.use('/', mainRouter);




//------------CONNECTION MONGOOSE----------------
mongoose.connect('mongodb://localhost:27017/user')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoBD'));
db.once('open', () => {
  console.log("Connecté à MongoBD");
})


// port d'ecoute
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le server en écoute sur le port ${PORT}`);
});

