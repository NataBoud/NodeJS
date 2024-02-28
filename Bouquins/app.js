const express = require("express");
const app = express();
const connection = require("./config/db");

const path = require("path");

app.set("view engine", "pug"); // Configuration du moteur de modèle
app.set("views", path.join(__dirname, "views")); // Spécification du répertoire des views

//-------------------MIDDLEWARE----------------------//
// dossier publique
app.use(express.static("public"));

// Ici on peut securiser les routes avant la response
app.use((req, res, next) => {
  console.log("Test!");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware executé!");
  next();
});
//-------------------MIDDLEWARE----------------------//

// Importez le routeur
const mainRouter = require("./src/router/bookRouters");
app.use("/", mainRouter); // Utilisez le routeur pour gérer les routes

//-------------------DATABASE----------------------//
const userData = { nom: "John Doe", email: "john.doe@example.com" };

//--------Create
// connection.query('INSERT INTO Users SET ?', userData, (err, result) => {
//   if (err) {
//     console.error('Erreur lors de l\'exécution de la requête :', err)
//   } else {
//     console.log('Utilisateur ajouté avec succès. ID :', result.insertId);
//   }
// });

//--------Read
connection.query("SELECT * FROM Users", (err, result) => {
  if (err) throw err;
  console.log("Utilisateur ajouté avec succès. ID :", result);
});

//--------Update
const id = 2;
const nom = "Tata Doe";
const email = "tata.doe@example.com";

connection.query("UPDATE Users SET nom = ?, email = ? WHERE id = ?", [nom, email, id], (err) => {
    if (err) throw err;
    console.log("Utilisateur mis à jour avec succès");
});

//--------Delete

connection.query('DELETE FROM Users WHERE id = ?', id, (err) => {
  if (err) throw err;
 console.log( ('Utilisateur supprimé avec succès'));
});

//-------------------DATABASE----------------------//

// port d'ecoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le server en écoute sur le port ${PORT}`);
});
