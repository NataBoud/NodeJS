const connection = require("../../config/db");

class Book {
  static getAllBooks(callback) {
    connection.query("SELECT * FROM livres", callback);
  }

  static addBook(bookData, callback) {
    connection.query("INSERT INTO livres SET ?", bookData, callback);
  }

  static updateBook(bookId, bookData, callback) {
    connection.query("UPDATE livres SET ? WHERE id= ?", [bookData, bookId], callback);
  }
  static deleteBook(bookId, callback) {
    connection.query("DELETE FROM livres WHERE id= ?", bookId, callback);
  }
}

module.exports = Book;
