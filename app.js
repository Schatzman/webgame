var express = require('express');
var app = express();

app.use(express.static('static'));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var port = 8080;

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});