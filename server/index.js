const express = require('express');
const path = require('path');
const fs = require('fs')

const endpoint = express(); // creating an instance of the express class
const port = 80; // creating a port var


endpoint.use(require('body-parser').urlencoded({ extended: false }))

endpoint.get('/', (req, res) => { // get index .html when default get request
  res.sendFile(path.join(__dirname,"../client/index.html")); // sends index.html
});

endpoint.get('/volunteer', (req, res) => { // gets form.html for volunteer page
  res.sendFile(path.join(__dirname,"../client/form.html")); // sends form.html
});

endpoint.get('/*', (req, res) => { // gets any other filed that might be requested
  const filepath = path.join(__dirname,"../client/",req.path) // creates a file path variable

  if (fs.existsSync(filepath)) { // cehcks file path exists
    res.sendFile(filepath); // sends the file
  } else { // otherwise send a 404 error
    res.status(404).sendFile(path.join(__dirname,"../client/404.html"))
  }
});

endpoint.post('/signup', (req,res) => {
  console.log(req.body.name)
})


endpoint.listen(port, () => {
  console.log(`running on port ${port}`);
});
