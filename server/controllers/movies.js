var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.movies.get((err, movies) => {
      if (err) {
        console.log(err);
      } else {
        res.json(movies);
      }
    });
  },

  post: (req, res) => {
    console.log(req.body)
    var params = [req.body.title, req.body.watched];
    models.movies.post(params, (err, movies) => {
      if (err) {
        console.log(err);
      } else {
        res.json(movies);
      }
    });
  }
};

