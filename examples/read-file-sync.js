const fs = require('fs');

const data = fs.readFileSync(__filename);
console.log('Data', data.toString());
console.log('done.');
