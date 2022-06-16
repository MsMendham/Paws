const express = require('express');
const path = require('path');
const fs = require('fs')
const schedule = require('node-schedule')

const db = require('./database.js')
const sendnotif = require('./sendnotif.js');

const endpoint = express(); // creating an instance of the express class
const port = 80; // creating a port var

schedule.scheduleJob('0 0 * * * ', sendnotif.send)

// endpoint.use(require('body-parser').urlencoded({ extended: true }))
endpoint.use(require('body-parser').json())

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
  // if (await db.pushToDatabase() == 0){
  //   db.createDatabase()
  //   db.pushToDatabase()
  // }

  console.log(req.body)
})


endpoint.listen(port, () => {
  console.log(`running on port ${port}`);
});
