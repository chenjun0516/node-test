const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;

// const server = http.createServer((req, res) => {
// 	res.stateCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello Node.js\n');
// })

// server.listen(port, hostname, () => {
// 	console.log(`服务器运行在http://${hostname}:${port}/`)
// })

http.createServer((req, res) => {
	res.stateCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello everybody Node.js\n');
}).listen(port, hostname, () => {
	console.log(`服务器运行在http://${hostname}:${port}/`)
})