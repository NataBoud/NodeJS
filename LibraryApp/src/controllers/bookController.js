const Book = require("../models/book");

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAllBooks((err, books) => {
      if (err) throw err;
      res.json(books);
    });
  },

  addBook: (req, res) => {
    bookData = req.body;
    Book.addBook(bookData, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Erreur lors de l'ajout du livre.");
        } else {
          console.log("Le livre a ajouté avec succès");
          res.json("Le livre a ajouté avec succès");
        }
      }
    );
  },

  updateBook: (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;
    Book.updateBook(bookId, bookData, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Erreur lors de la modification du livre.");
        } else {
          console.log("Le livre a modifié avec succès");
          res.send("Le livre a modifié avec succès");
        }
      }
    );
  },

  deletBook: (req, res) => {
    const bookId = req.params.id;
    Book.deleteBook(bookId, (err) => {
      if (err) throw err;
      res.send("Le livre a supprimé avec succès");
    });
  },

  parDefautPage: (req, res) => {
    res.status(404).send("Oups, on dirait qu'il n'y a pas de livre ici");
  }
};

module.exports = bookController;
