const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://<<db-user>>:<<pw>>@<<server-url>>/<<your-db>>";

(async function() {
    let client;

    try {
        client = await MongoClient.connect(url);
        console.log('Connected correctly to server');
        const db = client.db('db');
        let r = await db.collection('students').insertOne({text: 'hello web programming lab 3'});
        console.log(r);
    } catch(err) {
        console.log(err);
    } finally {
        client.close();
    }
})();