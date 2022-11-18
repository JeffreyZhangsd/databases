var models = require('../models');
//using our functions from models messages and users
//var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.json(data);
      }
    });
    // Message.findAll({ include: [User] }).complete((err, results) {res.json(data)});
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [ req.body.message, req.body.username, req.body.roomname ];
    models.messages.create(params, (err, results) => {
      //res.json(results);
      if (err) {
        console.error(err);
      }
    });
  } // a function which handles posting a message to the database
};

/*
User.findOrCreate({ username: req.body[username]})
  .complete((err, user) => {
    var params = {
      text: req.body[text],
      username: user.id,
      roomname: req.body[roomname]
    };
    Message.create(params)
      .complete((err, results) => {
        res.sendStatus(201);
      });
    });
  }
}
*/
