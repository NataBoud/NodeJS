const Book = require("../models/book");

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAllBooks((err, books) => {
      if (err) throw err;
      res.json(books);
    });
  },

  addBook: (req, res) => {
    // const bookData = [titre, auteur, annee_publication, disponible];
    bookData = req.body;
    Book.addBook(bookData, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors de l'ajout du livre.");
      } else {
        console.log("Livre ajouté avec succès");
        res.send("Livre ajouté avec succès");
      }
    });
  },

  updateBook: (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;
    Book.updateBook(bookId, bookData, (err, result) => {
      if (err) throw err;
      res.send("Livre mis à jour avec succès");
    });
  },

  deletBook: (req, res) => {
    const bookId = req.params.id;
    Book.deleteBook(bookId, (err, result) => {
      if (err) throw err;
      res.send("Livre supprimé avec succès");
    });
  },
};

module.exports = bookController;
