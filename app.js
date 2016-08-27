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

function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var db = new sqlite3.Database(file);

db.serialize(function(){ // serialize runs cmds in order

    if (!exists) {
        db.run("CREATE TABLE stuff (thing TEXT)");
    }
    var stmt = db.prepare("INSERT INTO stuff VALUES (?)");

    for (i = 0; i < 10; i++) {
        var rnd = getRandInt(500, 900000);
        stmt.run("Thing #" + rnd);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
        console.log(row.id + ": " + row.thing);
    });

    db.close();
});

app.get("/poop/", function (req, res) {
  res.send("Hello fuckerhead! " + getRandInt(1, 109342) + " shhhhooooooooooooot");
});

var port = 8080;

app.listen(port, function () {
  console.log("App listening on port " + port + "! FUCKERFACE.");
});