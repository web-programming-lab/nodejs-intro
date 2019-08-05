const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('HELLO_EVENT');

emitter.on('HELLO_EVENT', () => {
  console.log('event was fired.');
});

emitter.on('HELLO_EVENT', () => {
  console.log('event was fired.');
});

// Wieviel Mal wird hier 'event was fired' ausgeführt?