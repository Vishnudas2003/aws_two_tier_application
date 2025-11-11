const express = require('express')

const app = express()

const port = process.env.PORT || 3000;

//routing path
app.get('/', (req, res) => {
  res.send('Hello from my AWS Two-Tier App!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});