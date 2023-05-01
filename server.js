const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3001;
const routes = require('./routes/routes');


// connection string to local instance of MongoDb
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// initializes a new instance of MongoDB
const client = new MongoClient(connectionStringURI);

// declared var to hold connection
let db;

// db name
const dbName = 'bookFaceSocialDB';

// connects MongoDB to server
client.connect()
    .then(() => {
        console.log('succesfully connected to MongoDB');
        // client.db() to add new db instance
        db = client.db(dbName);

        // start express server
        app.listen(port, () => {
            console.log(` App listening at https://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Mongo connection error:', err.message);
    })
// parses incoming request to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// creates new doc in mongodb w/ dbName
app.post('/create', (req, res) => {
    // utilizes db connection to add new doc(mongoDB uses docs to store data in BJSON)
    db.collection('userBase').insertOne(
        {
            name: req.body.name,
            email: req.body.email,
            thoughts: [],
            friends: [],
        }
    )
    .then(results => res.jsom(results))
    .catch(err => {
        if (err) throw err;
    });
});
app.get('/read', (req, res) => {
    // Use db connection to find all documents in collection
    db.collection('userBase')
      .find()
      .toArray()
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });
  });
  