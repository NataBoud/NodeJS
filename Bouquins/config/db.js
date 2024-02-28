const mysql = require('mysql2');

const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'nata16',
     database: 'test_bdd'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connection');
    } else {
        console.log('Connecté à la BDD MySQL');
    }
})

module.exports = connection;