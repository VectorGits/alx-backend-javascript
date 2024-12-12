const express = require('express');

const app = express();

module.exports = app;
const port = 7865;

app.listen(port, () => {
  app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
  });
  console.log(`API available on localhost port ${port}`);
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});