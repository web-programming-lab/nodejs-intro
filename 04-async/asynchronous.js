const fs = require('fs');

fs.readFile(__filename, (error, data) => {
    // Liest den Datei-Inhalt asynchron --> geht durch den Event-Loop
    console.log('Data: ', data);
});

console.log('not yet done ;-)');