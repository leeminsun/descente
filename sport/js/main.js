
$(document).ready(function(){
    var $width = $(window).width(),
        $height = $(window).height();
    function intro() {
        var r = Raphael("reac1", "100%", "100%");
        //dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
        r.path("M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0z").attr({transform: "t100,0r225s2"}, {transform: ""});
        var r1 = Raphael("reac2", "100%", "100%");
        //dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
        r1.path("M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0z").attr({transform: "t100,0r225s2"}, {transform: ""});
        var r2 = Raphael("reac3", "100%", "100%");
        //dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
        r2.path("M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0z").attr({transform: "t100,0r225s2"}, {transform: ""});

    };
    setTimeout(intro, 1000);
});