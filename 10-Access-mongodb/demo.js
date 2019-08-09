const mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb+srv://<<your user>>:<<your password>>@cluster0-yrqxq.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
    if (err) {
        console.log('there is an error', err);
    }

    let db = client.db('your-db');

    db.collection('my-collection').save({text: 'hello web programming lab'}, (err, result) => {
        console.log('saved to db');
    });
});