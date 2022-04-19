const http = require('http');

const port = 8000;

// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end('Hello Node.js Server!');
// };

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    response.end('Hello Node.js Server!');
  } else if (request.url === '/about') {
    response.end('This demonstrates routing with Node.js.');
  } else {
    response.end('Default page (URLs other than / and /about)');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});