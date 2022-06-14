
// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.createServer(function (request, response) {
   
    
//     var filePath = '.' + request.url;
//     if (filePath == './') {
//       filePath = './Exercise8.3/index.html';
//     }
//     console.log(filePath);
    
//     var extname = String(path.extname(filePath)).toLowerCase();
//     var mimeTypes = {
//       '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//         '.gif': 'image/gif',
//         '.svg': 'image/svg+xml',
//         '.wav': 'audio/wav',
//         '.mp4': 'video/mp4',
//         '.woff': 'application/font-woff',
//         '.ttf': 'application/font-ttf',
//         '.eot': 'application/vnd.ms-fontobject',
//         '.otf': 'application/font-otf',
//         '.wasm': 'application/wasm'
//       };
      
//       var contentType = mimeTypes[extname] || 'application/octet-stream';
      
//       fs.readFile(filePath, function(error, content) {
//         console.log(content)
//         if (error) {
//           if(error.code == 'ENOENT') {
//             fs.readFile('./404.html', function(error, content) {
//               response.writeHead(404, { 'Content-Type': 'text/html' });
//               response.end(content, 'utf-8');
//             });
//                   console.log(error);
//                 }
//                 else {
//                   response.writeHead(500);
//                   response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//                 }
//               }
//               else {
//                 response.writeHead(200, { 'Content-Type': contentType });
//                 response.end(content, 'utf-8');
//         }
//     });
    
//   }).listen(8125);
// console.log('Server running at http://127.0.0.1:8125/');


  const http = require('http');
  const fs = require('fs');
  const path = require('path');
  
  const hostname = '127.0.0.1'
  const port = 3000;
  
  const server = http.createServer((req,res)=>{

    if(req.method !== 'GET') {
      return res.end(http.STATUS_CODES[400])
    }
    console.log(req.url);
    
   if(req.url === '/raw-html'){
    fs.readFile('./users.json',(err,content=>{
      
    }))
   }
   if(req.url === '/users'){
    res.writeHead(200,{
      'Content-type': 'text/html',
    })
    res.write('<h1>Welcome</h1>')
    return res.end()
   }

    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }

  })
  
  server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
  })
