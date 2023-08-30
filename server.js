/* 
   TODO: Module 5 Assignment
*/

const http = require('node:http');
const fs = require('node:fs');

const port = 3000;

const server = http.createServer((req, res) => {
   const url = req.url;

   if (url === '/') {
      res.end('This is Home Page');
   } else if (url == '/about') {
      res.end('This is About Page');
   } else if (url == '/contact') {
      res.end('This is Contact Page');
   } else if (url == '/file-write') {
      fs.writeFile('demo.txt', 'Hello World', function (err) {
         if (err) {
            console.log(err);
         } else {
            res.end(fs.readFileSync('demo.txt', 'utf-8'));
         }
      });
   } else {
      res.end('Invalid URL: ' + url);
   }
});

server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
