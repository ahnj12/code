// Jooneil Ahn
// stream-vis solution

$(document).ready(function () {
    $("body").append('<canvas id="screenCanvas" width="' + $(document).width() + 'px" height="' + $(document).height() + 'px" ></canvas>');

    var context = $("#screenCanvas")[0].getContext("2d");

    var screenHeight = $("#screenCanvas").height();
    var screenWidth = $("#screenCanvas").width();

    var x = screenWidth / 2.0;
    var y = screenHeight / 2.0;
 
    var maxRadius = null;
    if (screenWidth > screenHeight) {
        maxRadius = screenHeight - y;
    } else {
        maxRadius = screenWidth - x;
    }

    console.log("max radius: " + maxRadius);

    // Listens for message event and creates a new rectangle
    // every time the event occurs.
    $(document).on("message", function (evt) {
        context.fillStyle = evt.color;
        console.log("creating circle");
        var radius = (evt.weight / 100) * maxRadius;
        context.globalAlpha = 1 / evt.weight;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    });
});