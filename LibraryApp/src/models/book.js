const connection = require("../../config/db");

class Book {
  static getAllBooks(callback) {
    connection.query("SELECT * FROM livres", callback);
  }

  static addBook(bookData, callback) {
    connection.query(
      "INSERT INTO livres (titre, auteur, annee_publication, disponible) VALUES (?, ?, ?, ?)",
      bookData,
      callback
    );
  }

  static updateBook(bookId, bookData, callback) {
    connection.query(
      "UPDATE livres SET titre = ?, auteur = ?, annee_publication = ?, disponible = ?   WHERE id= ?",
      [
        bookData.titre,
        bookData.auteur,
        bookData.annee_publication,
        bookData.disponible,
        bookId,
      ],
      callback
    );
  }

  static deleteBook(bookId, callback) {
    connection.query("DELETE FROM livres WHERE id= ?", bookId, callback);
  }
}

module.exports = Book;
