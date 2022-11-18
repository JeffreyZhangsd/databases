var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    db.query(queryString, (err, result) => {
      callback(err, result);
    });
  }, //method to get all users
  create: function (givenUser, callback) {
    var insertString = 'INSERT INTO users(username) VALUES (?)';
    db.query(insertString, givenUser, (err, result) => {
      callback(err, result);
    });
  }
};
