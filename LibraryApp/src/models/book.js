const connection = require("../../config/db");

class Book {
  static getAllBooks(callback) {
    connection.query("SELECT * FROM livres", callback);
  }

  static addBook(bookData, callback) {
    connection.query("INSERT INTO livres VALUES ?", bookData, callback);
  }

  static updateBook(bookId, bookData, callback) {
    connection.query(
      "UPDATE users SET ? WHERE id= ?",
      [bookData, bookId],
      callback
    );
  }

  static deleteBook(bookId, callback) {
    connection.query("DELETE FROM users WHERE id= ?", bookId, callback);
  }
}

module.exports = Book;
