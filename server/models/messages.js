var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT messages.id, messages.words, messages.roomname, users.username \
                      FROM messages LEFT OUTER JOIN users ON (messages.usersId = users.id) \
                      order by messages.id desc';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var insertString = 'INSERT INTO messages(words, usersId, roomname) \
                        VALUE (?, (SELECT users.id FROM users WHERE username = ? LIMIT 1), ?)';
    db.query(insertString, params, (err, result) => {
      callback(err, result);
    });
  } // a function which can be used to insert a message into the database
};
