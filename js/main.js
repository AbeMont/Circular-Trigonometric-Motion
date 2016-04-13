var t = 0;

function moveit() {
    t += 0.05; //if tangent is 0, the rocket wont move

    var r = 20;
    var xcenter = 70;
    var ycenter = 70;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));

    $('#rocket').animate({
        top: newTop,
        left: newLeft,
    },
    1,
    function() {
        moveit();
    });

};


$(document).ready(function() {

    $("#rocket").mouseenter(function () {
    	moveit();
    });
     $("#rocket").mouseleave(function () {
       $(this).stop();
    });

});
