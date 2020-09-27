// set name application to differ apps in newrelic interface
process.env.APP_NAME = "index-A";
const newrelic = require('newrelic');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || "localhost";
const url = `http://${host}:${port}`;

app.use(express.json());


// add root route to express
app.get('/', (req, res) => {
  console.log('Sucesso');
  res.send('OK');
});

// add root route to express
app.get('/error', (req, res) => {
  res.status(500).send('Erro na API!');
});

// start application server
app.listen(port, () => {
  console.log(`Aplicação rodando na url http://localhost:${port}`);
});