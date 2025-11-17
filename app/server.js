const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
//set port, listen for requests
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//routing path
app.get('/', (req, res) => {
  res.send('Hello from my AWS Two-Tier App! - Server is running.');
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});