const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT ? process.env.PORT : 80;
const dist = path.join(__dirname, 'dist');

const api_url = process.env.API_URL ? process.env.API_URL : "http://localhost:3000/";

// console.log(process.env.API_URL)
app.use(express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
  console.info('API requests or going to %s.', api_url); // eslint-disable-line no-console
});
