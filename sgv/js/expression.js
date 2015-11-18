/**
 * Created by minsun on 15. 11. 19..
 */

$(document).ready(function(){
    var paper = Raphael(10, 50, $(window).width(), $(window).height());
    var circle1 = paper.circle(100, 100, 10);
    var circle2 = paper.circle(200, 200, 10);
    var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
    circle1.animate(anim); // run the given animation immediately
    circle2.animate(anim.delay(500));
})