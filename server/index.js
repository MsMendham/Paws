const express = require('express'); 
const path = require('path');
const fs = require('fs')


const endpoint = express(); // creating an instance of the express class
const port = 80; // creating a port var

endpoint.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname,"../client/index.html"));
});

endpoint.get('/volunteer', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/form.html"));
});

endpoint.get('/*', (req, res) => {
  const filepath = path.join(__dirname,"../client/",req.path)
  if (fs.existsSync(filepath)){
    res.sendFile(filepath);
  }else{
    res.status(404).send(
      "<h1>Error 404, oopsie doopsie that file doesn't exist</h1>")
  }
});



endpoint.listen(port, () => {
  console.log(`running on port ${port}`);
});
