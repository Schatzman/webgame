var express = require('express');
var app = express();

app.use(express.static('static'));

function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/poop/', function (req, res) {
  res.send('Hello fuckerhead!' + getRandInt(1, 109342));
});

var port = 8080;

app.listen(port, function () {
  console.log('App listening on port ' + port + '! FUCKERFACE.');
});