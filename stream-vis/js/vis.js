// Jooneil Ahn
// stream-vis solution

$(document).ready(function () {
    $("body").append('<canvas id="screenCanvas" width="' + $(document).width() + 'px" height="' + $(document).height() + 'px" ></canvas>');

    var context = $("#screenCanvas")[0].getContext("2d");

    var screenHeight = $("#screenCanvas").height();
    var screenWidth = $("#screenCanvas").width();

    var x = screenWidth / 2.0;
    var y = screenHeight / 2.0;
 
    // Makes sure that the circle will fit on the screen
    var maxRadius = null;
    if (screenWidth > screenHeight) {
        maxRadius = screenHeight - y;
    } else {
        maxRadius = screenWidth - x;
    }

    // Listens for message event and creates a new rectangle
    // every time the event occurs.
    $(document).on("message", function (evt) {
        context.fillStyle = evt.color;
        var radius = (evt.weight / 100) * maxRadius;
        context.globalAlpha = 1 / (evt.weight / 10);
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    });
});