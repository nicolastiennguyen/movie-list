const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./database');
const controllers = require('./controllers');

app.use(express.static('client/dist'));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// Router
app.get('/movies', (req, res) => {
  controllers.movies.get(req, res);
});

app.post('/movies', (req, res) => {
  controllers.movies.post(req, res);
});