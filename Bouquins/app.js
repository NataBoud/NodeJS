const express = require("express");
const app = express();

// dossier publique
app.use(express.static("public"));

// Ici on peut securiser les routes avant la response
app.use((req, res, next) => {
    console.log('Test!');
    next();
})

app.use((req, res, next) => {
    console.log('Middleware executé!');
    next();
})


// Importez le routeur
const mainRouter = require("./router/bookRouters")

// Utilisez le routeur pour gérer les routes
app.use('/', mainRouter);


// port d'ecoute
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le server en écoute sur le port ${PORT}`);
});
