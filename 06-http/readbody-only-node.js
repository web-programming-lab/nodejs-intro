
const http = require('http');

http.createServer((r, s) => {
    console.log(r.method, r.url, r.headers);
    let body = '';
    r.on('data', (chunk) => {
        body += chunk;
    });
    r.on('end', () => {
        console.log('end');
        console.log(body);
        s.write('OK'); 
        s.end(); 
    });
}).listen(42646); 