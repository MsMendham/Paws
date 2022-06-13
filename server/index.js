const express = require('express');
const path = require('path');

const endpoint = express();
const port = 80;

endpoint.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/index.html"));
});

endpoint.get('/volunteer', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/form.html"));
});

endpoint.get('/css/*', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/",req.path));
});

endpoint.listen(port, () => {
  console.log(`running on port ${port}`);
});
