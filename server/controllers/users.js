var models = require('../models');
//CLIENT -> GET USERNAMES
module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
      }
    });
    // User.findAll();
  },
  post: function (req, res) {
  //User.create( {username: req.body} )
    var params = [ req.body.username ];
    models.users.create(params, (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
      // res.json(results);
    });
  } //controller access to posting
};
