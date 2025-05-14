
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    
  const query = url.parse(req.url, true);
  let filename = `.${query.pathname}`;

  if (filename === './') {
    filename = './home.html';
  }

     fs.readFile(filename, (err, data) => {
     try {
       res.writeHead(200, { 'Content-Type': 'text/html' })
       res.write(data)
       return res.end()
     } catch (error) {
       res.writeHead(404, { 'Content-Type': 'text/html' })
       console.error(error)
       return res.end('404 Not Found')
     }
   })
 })
 .listen(8080)
