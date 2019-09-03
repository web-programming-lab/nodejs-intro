
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('HELLO_EVENT', () => {
  console.log('event was fired.');
});

emitter.on('HELLO_EVENT', data => {
  console.log(`event was fired. Data : ${data}`);
});


emitter.emit('HELLO_EVENT', 'hello');


// Wieviel Mal wird hier 'event was fired' ausgeführt?f