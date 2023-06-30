const http = require('http');

// Sample data for products
const menProducts = [
  { id: 1, name: 'Women Product 1', brand:"ABC", price:"780", color:"white", size:"S", category: 'Clothing'},
  { id: 2, name: 'Women Product 2', brand:"ABC", price:"657", color:"red", size:"M", category: 'Clothing'},
  { id: 3, name: 'Women Product 3', brand:"ABC", price:"832", color:"Blue", size:"L", category: 'Clothing'},
  { id: 4, name: 'Women Product 4', brand:"ABC", price:"928", color:"black", size:"XL", category: 'Clothing'},
  { id: 5, name: 'Women Product 5', brand:"ABC", price:"274", color:"violet", size:"XLL", category: 'Clothing'},
  { id: 6, name: 'Women Product 6', brand:"ABC", price:"337", color:"orange", size:"XLLL", category: 'Clothing'},
  { id: 7, name: 'Women Product 7', brand:"ABC", price:"1043", color:"green", size:"S", category: 'Clothing'},
  { id: 8, name: 'Women Product 8', brand:"ABC", price:"1832", color:"pink", size:"M", category: 'Clothing'},
  { id: 9, name: 'Women Product 9', brand:"ABC", price:"956", color:"olive", size:"L", category: 'Clothing'},
  { id: 10, name: 'Women Product 10', brand:"ABC", price:"1567", color:"blue", size:"XL", category: 'Clothing'}
];

const womenProducts = [
    { id: 1, name: 'Women Product 1', brand:"ABC", price:"780", color:"white", size:"S", category: 'Clothing'},
    { id: 2, name: 'Women Product 2', brand:"ABC", price:"657", color:"red", size:"M", category: 'Clothing'},
    { id: 3, name: 'Women Product 3', brand:"ABC", price:"832", color:"Blue", size:"L", category: 'Clothing'},
    { id: 4, name: 'Women Product 4', brand:"ABC", price:"928", color:"black", size:"XL", category: 'Clothing'},
    { id: 5, name: 'Women Product 5', brand:"ABC", price:"274", color:"violet", size:"XLL", category: 'Clothing'},
    { id: 6, name: 'Women Product 6', brand:"ABC", price:"337", color:"orange", size:"XLLL", category: 'Clothing'},
    { id: 7, name: 'Women Product 7', brand:"ABC", price:"1043", color:"green", size:"S", category: 'Clothing'},
    { id: 8, name: 'Women Product 8', brand:"ABC", price:"1832", color:"pink", size:"M", category: 'Clothing'},
    { id: 9, name: 'Women Product 9', brand:"ABC", price:"956", color:"olive", size:"L", category: 'Clothing'},
    { id: 10, name: 'Women Product 10', brand:"ABC", price:"1567", color:"blue", size:"XL", category: 'Clothing'}
];

// Create a server
const server = http.createServer((req, res) => {
  // Set the content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Route handling
  if (req.url === '/') {
    // Handle the root endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    // Handle the /men endpoint
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    // Handle the /women endpoint
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    // Handle other endpoints
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
