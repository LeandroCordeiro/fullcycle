const express = require('express');
const bodyParser = require('body-parser');
const peopleRoutes = require('./routes/people');

const app = express();

app.use(bodyParser.json());
app.use('/people', peopleRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
