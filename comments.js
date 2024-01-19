// Create web server
// Run: node comments.js
// Access: http://localhost:3000/

var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
  // Parse the query string
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  // Read the file
  fs.readFile(filename, function(err, data) {
    if (err) {
      // Return 404
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    
    // Return the file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);