const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
let router = express.Router();


// mount the router on the app
app.use('/', router);
app.set('view engine', 'html');


app.listen(4444, () => console.log('started'));