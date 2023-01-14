const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

// Configure handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Add routes
app.get('/', (req, res) => {
  const people = await peopleController.getAllPeople();
  res.render('index', { people });
});

// Start the server
app.listen(8000, () => {
  console.log('Server running on port 8000');
});
