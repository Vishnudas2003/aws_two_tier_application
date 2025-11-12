const express = require('express')
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
//set port, listen for requests
const port = process.env.NODE_DOCKER_PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MySQL connection configuration
function connectWithRetry() {
  const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootpassword',
    database: process.env.DB_NAME || 'testdb'
  });

  db.connect((err) => {
    if (err) {
      console.error('❌ Database not ready, retrying in 5 seconds...', err.message);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('✅ Connected to MySQL database.');
      global.db = db;
    }
  });
}

connectWithRetry();

//routing path
app.get('/', (req, res) => {
  res.send('Hello from my AWS Two-Tier App!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});