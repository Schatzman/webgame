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

    db.each("SELECT rowid AS id, thing FROM stuff", function(err, row) {
        console.log(row.id + ": " + row.thing);
    });

    db.close();
});

function generateCharacter(name) {
    var statsArray = ["fertility","creative_fervor"];
    var newCharacter = {"name": name};
    for (i=0; i<statsArray.length; i++) {
        newCharacter[statsArray[i]] = getRandInt(3, 18);
    }
    return newCharacter;
}

// create function to add char table to db
// create function to save char to db
// func to retrieve char from db
// create encounter endpoint
// create combat end points

app.get("/pewp/", function (req, res) {
  res.send("Hello spaceship! " + getRandInt(1, 109342) + " pew pew pew");
});

app.get("/create_character/", function (req, res) { // this will need to be POST
    res.send(generateCharacter("default"));
});

app.post('/test-post', function(req, res) {
    console.log(req.body);
    res.send({"you": "don't tell me", "what": "to do!"});
});

app.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
    ws.send(msg + " FUCKER!");
  });
});

var port = 8080;

app.listen(port, function () {
  console.log("App listening on port " + port + "! SCIENCE.");
});
