var db = require('../database');

module.exports = {
  get: (callback) => {
    var queryStr = 'SELECT * FROM movies';
    db.query(queryStr, function(err, movies) {
      if (err) {
        console.log(err);
      } else {
        callback(null, movies);
      }
    })
  },

  post: (params, callback) => {
    var queryStr = 'INSERT INTO movies(title) VALUES(?)';
    db.query(queryStr, params, function(err, movies) {
      if (err) {
        console.log(err);
      } else {
        callback(null, movies);
      }
    });
  }
};