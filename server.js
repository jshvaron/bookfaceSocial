const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/routes');
const db = require('./config/connection');


// parses incoming request to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  