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
};

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
    ctx.arc( 20, 20, 5, 0, Math.PI*2, true );
    ctx.closePath();
    ctx.fill();
    console.log("5. Circle drawn.");
});