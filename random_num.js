const express = require('express');
const app = express();

const port = 3003;

//home page
app.get('/', (req, res) => {
    res.json({ msg:'This is homepage' });
  });

// Endpoint for generating a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
  res.json({ random: randomNumber }); // Sends the random number as a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
