// Via fs.promises

// Experimental
const { readFile } = require('fs').promises;

console.log(require('fs').promises);

async function readMyFile() {
    const data = await readFile(__filename);
    console.log('Data: ', data);
}

readMyFile();

console.log('not yet done ;-)');


// // ---
// // Manuell via promisify util
// // ---
// const fs = require('fs');
// const util = require('util');

// // Braucht so keine Callback-Function
// const fileRead = util.promisify(fs.readFile);

// async function readMyFileAsync() {
//     const data = await fileRead(__filename);
//     console.log('Data: ', new Buffer(data).toString());
// }

// readMyFileAsync();

// console.log('not done yet ;-)')

// Text-Content ausgeben: new Buffer(data).toString()
