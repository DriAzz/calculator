$(document).ready(function () {
    $(".calButton").hover(function () {
        $(this).css({
            "transition": "0.3s",
            "background-color": "orange",
            "color": "black"
        });
    }, function () {
        $(this).css({
            "transition": "0.3s",
            "background-color": "black",
            "color": "orange"
        });
    });
});