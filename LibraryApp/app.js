const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const bookRouter = require("./src/routes/bookRoutes");

//-------------------MIDDLEWARE----------------------//
app.use(bodyParser.json());


app.use("/", bookRouter); // Utilisez le routeur pour gérer les routes


app.listen(PORT, () => {
  console.log(`Le server en écoute sur le port ${PORT}`);
});
