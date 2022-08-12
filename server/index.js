const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./database');

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

db.query(
  'SELECT * FROM `movies`',
  function(err, results, fields) {
    console.log(results)
  }
);

app.get('/movies', (req, res) => {
  const movies = [
    {
      title: 'Top Gun'
    }
  ]
  res.status(200).send(movies);
})