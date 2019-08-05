
const fs = require('fs');

// Liest den Datei-Inhalt synch
const data = fs.readFileSync(__filename);

console.log('Data:', data);
console.log('Done');