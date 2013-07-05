var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync('index.html');
  var helloTxt = buffer.toString('utf8');
  //response.send('Hello World 2!');
  response.send(helloTxt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
