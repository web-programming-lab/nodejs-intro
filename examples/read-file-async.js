const fs = require('fs');

fs.readFile(__filename, (err, data) => {
  console.log('Data: ', data.toString());
});

console.log('not yet done ;-)');
