// *
// DSM 2016
// *

var express = require("express");
var app = express();
var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();
var expressWs = require('express-ws')(app);
var bodyParser = require('body-parser')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static("static"));

var grossDbFile = "grossPeople.db";
var exists = fs.existsSync(grossDbFile);

app.get("/gross-people/", function (req, res) {
  console.log("/gross-people URL HIT");
  var db = new sqlite3.Database(grossDbFile);
  db.serialize(function(){
    db.all("SELECT rowid AS id, firstname, lastname FROM gross", function(err, rows) {
      console.log(rows);
      res.send(JSON.stringify({"grossPeople": rows}));
    });
    db.close();
  });
});

app.post("/report-gross-person", function (req, res) {
  console.log("/report-gross-person URL HIT");
  var db = new sqlite3.Database(grossDbFile);
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  console.log(lastname + ", " + firstname);
  db.serialize(function(){

  if (!exists) {
    db.run("CREATE TABLE gross (firstname TEXT, lastname TEXT)");
  }
  var stmt = db.prepare("INSERT INTO gross VALUES (?, ?)");

  stmt.run(firstname, lastname);
  stmt.finalize();

  db.each("SELECT rowid AS id, firstname, lastname FROM gross", function(err, row) {
    console.log(row.id + ": " + row.lastname + ", " + row.firstname);
  });

  db.close();
  });
  res.send(JSON.stringify({"good": "insertion"}));
});

var port = 8080;

app.listen(port, function () {
  console.log("Gross people who don't wash their hands app listening on port " + port + "! SCIENCE.");
});
