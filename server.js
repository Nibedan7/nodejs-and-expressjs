const express = require('express');

const app = express();

// Route for the homepage
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// Route for the about page
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
