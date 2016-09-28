var display = document.getElementsByClassName("display")[0];

function getUrl(url) {
  return fetch(url)
  .then(
    function(response) {
      return response.text();
    })
  .then(
    function(myResp) {
      console.log(myResp)
      display.innerHTML = myResp;
    })
}

function postUrl(url) {

  // var data = $("#postData").val();
  var data = {"go":"win!"};
  var postHeaders = new Headers({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': 'CustomValue'
  });

  console.log(data);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    // body: data,
    headers: postHeaders
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ console.log( JSON.stringify(data) ) })
}

$(document).ready(function(){
  console.log("1. Document ready.");

  var container = document.createElement("div");
  var canvas = document.createElement("canvas");
  var display = document.createElement("div");
  console.log("2. Elements created.");

  container.appendChild(canvas);
  container.appendChild(display);
  document.body.appendChild(container);
  console.log("3. Elements appended.");

  display.id = "player_display";
  canvas.width = 1200;
  canvas.height = 600;
  canvas.id = "canvas";
  canvas.setAttribute( "style", "border:1px solid #FFEFEF;" );
  console.log("4. Canvas configured.");

  var ctx = canvas.getContext( '2d' );
  //draw player circle to start
  ctx.beginPath();
  ctx.arc( 600, 300, 5, 0, Math.PI*2, true );
  ctx.closePath();
  ctx.fillStyle="#FF0000";
  ctx.fill();
  console.log("5. Circle drawn.");

  display.innerHTML = "<h1>LOADED.</h1>";

  var exampleSocket = new WebSocket("ws://192.168.56.101:8080/echo");

  console.log("Opening socket:");
  console.log(exampleSocket);

  var msg = "Here's some text that the server is urgently awaiting...";
  exampleSocket.onopen = function (event) {
    exampleSocket.send(msg);
    console.log("Sending msg to socket:");
    console.log(msg);
    console.log(exampleSocket);
  }

  exampleSocket.onmessage = function (event) {
    console.log(event);
  }

  $("#socket-button").click(function(){
    var data = $("#postData").val();
    exampleSocket.send(data);
  });
});
