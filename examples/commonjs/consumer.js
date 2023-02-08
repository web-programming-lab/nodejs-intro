// eslint-disable-next-line no-undef
console.log(arguments); // CommonJS modules are wrapped in a function

const output = require('./output.cjs');
output.log('hello web programming lab!');
output.log(`${output.myVar}`);
