// *
// DSM 2016
// *

var express = require("express");
var app = express();
var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

app.use(express.static("static"));

var file = "test.db";
var exists = fs.existsSync(file);

var db = new sqlite3.Database(file);

function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/poop/", function (req, res) {
  res.send("Hello fuckerhead! " + getRandInt(1, 109342) + " shhhhooooooooooooot");
});

var port = 8080;

app.listen(port, function () {
  console.log("App listening on port " + port + "! FUCKERFACE.");
});