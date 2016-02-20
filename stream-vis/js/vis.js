// Jooneil Ahn
// stream-vis solution

$(document).ready(function () {
    $("body").append('<canvas id="screenCanvas" width="' + $(document).width() + 'px" height="' + $(document).height() + 'px" ></canvas>');

    var context = $("#screenCanvas")[0].getContext("2d");

    var x = 0;
    var y = 0;
    var height = 50;

    // Listens for message event and creates a new rectangle
    // every time the event occurs.
    $(document).on("message", function (evt) {
        context.fillStyle = evt.color;
        var width = evt.weight * 2;
        if ((x + width) > $("#screenCanvas").width()) {
            x = 0;
            y += 50;
        }
        context.fillRect(x, y, width, height);
        x += width;
    });
});