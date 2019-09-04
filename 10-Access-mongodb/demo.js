const mongoClient = require('./node_modules/mongodb').MongoClient;


mongoClient.connect('mongodb://test-user:test-123@ds217078.mlab.com:17078/test-db-2', (err, client) => {
    if (err) {
        console.log('there is an error', err);
    }

    let db = client.db('test-db-2');

    db.collection('my-collection').insertOne({text: 'hello web programming lab 3'}, (err, result) => {
        console.log('saved to db');
        client.close();
    });
});