const mongoClient = require('./node_modules/mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.json())

server.get('/students', (req, res) => {
    mongoClient.connect('<<your connection string>>', (err, client) => {
        if (err) {
            console.log('there is an error', err);
        }

        let db = client.db('test-db');

        const collection = db.collection('my-collection');
        collection.find({}).toArray(function(err, students) {
            console.log("Found the following records");
            console.log(students);
            res.send(students);
          });
    });
});

server.post('/students', (req, res) => {
    mongoClient.connect('<<your connection string>>', (err, client) => {
        if (err) {
            console.log('there is an error', err);
        }

        let db = client.db('test-db');

        db.collection('my-collection').save(req.body, (err, result) => {
            console.dir(req.body);
            console.log('saved to db');
        });
    });

    res.status(201);
    res.end();
});

server.listen(4566, () => {
    console.log('a server with express is running....');
});