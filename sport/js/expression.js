$(document).ready(function){

    Raphael.fn.arrow = function (x, y) {
        return this.path(["M", x, y] + "m-10-10l20,0 0-6 10,16 -10,16 0-6 -20,0 0,6 -10-16 10-16z").attr({fill: "#fff", stroke: "none", "stroke-dasharray": "-", "fill-opacity": 0.2});
    };
    window.onload = function () {
        // var r = Raphael("holder", 619, 419),
        var r = Raphael("holder", 619, 419), //Raphael(0, 0, "100%", "100%"),
            dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
        // Ellipse
        (function () {
            r.circle(40, 40, 20).attr(dashed);
            r.circle(140, 40, 20).attr(dashed);
            var el = r.circle(40, 40, 20).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                elattrs = [{cx: 140, fill: "#f00", "fill-opacity": 1}, {cx: 40, fill: "#fff", "fill-opacity": 0}],
                now = 1;
            r.arrow(90, 40).click(function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            });
        })();
        // Ellipse
        (function () {
            r.circle(40, 90, 20).attr(dashed);
            r.ellipse(140, 90, 20, 10).attr({fill: "none", stroke: "#666", "stroke-dasharray": "- ", transform: "r45"});
            var el = r.ellipse(40, 90, 20, 20).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{ry: 10, transform: "t100,0r45"}, {ry: 20, transform: ""}],
                now = 1;
            r.arrow(90, 90).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Rect
        (function () {
            r.rect(19.5, 119.5, 40, 40).attr(dashed);
            r.rect(120, 130, 30, 20).attr({fill: "none", stroke: "#666", "stroke-dasharray": "- ", transform: "r120"});
            var el = r.rect(20, 120, 39, 39).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{x: 120, y: 130, transform: "r120", width: 30, height: 20, stroke: "#f00", opacity: .3, "stroke-width": 10}, {x: 20, y: 120, transform: "", width: 39, height: 39, stroke: "#fff", opacity: 1, "stroke-width": 2}],
                now = 1;
            r.arrow(90, 140).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 1
        (function () {
            r.path("M20,189.5c0-20 40,20 40,0").attr(dashed);
            r.path("M120,189.5c0-20 40,20 40,0").attr(dashed);
            var el = r.path("M20,189.5c0-20 40,20 40,0").attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: "M120,189.5c0-20 40,20 40,0"}, {path: "M20,189.5c0-20 40,20 40,0c"}],
                now = 1;
            r.arrow(90, 190).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 2
        (function () {
            r.path("M20,240c0-20 40,-20 40,0c0,20 -40,20 -40,0z").attr(dashed);
            r.path("M120,240c0-20 40,20 40,0c0-20 -40,20 -40,0z").attr(dashed);
            var el = r.path("M20,240c0-20 40,-20 40,0c0,20 -40,20 -40,0z").attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: "M120,240c0-20 40,20 40,0c0-20 -40,20 -40,0z"}, {path: "M20,240c0-20 40,-20 40,0c0,20 -40,20 -40,0z"}],
                now = 1;
            r.arrow(90, 240).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 3
        (function () {
            r.path("M20,290c0-20 40,20 40,0").attr(dashed);
            r.path("M120,290c0-20 40,20 40,0c0-20 -40,20 -40,0z").attr(dashed);
            var el = r.path("M20,290c0-20 40,20 40,0").attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: "M120,290c0-20 40,20 40,0c0-20 -40,20 -40,0z"}, {path: "M20,290c0-20 40,20 40,0c"}],
                now = 1;
            r.arrow(90, 290).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 4
        (function () {
            var path1 = "M20,336c0-20 40,20 40,0m-40,8c0-20 40,20 40,0",
                path2 = "M120,340c0-20 40,20 40,0c0-20 -40,20 -40,0z";
            r.path(path1).attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(90, 340).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 5
        (function () {
            var path1 = "M20,390l0-20 5,0 0,40 5,0 0-40 5,0 0,40 5,0 0-40 5,0 0,40 5,0 0-40 5,0 0,40 5,0 0-20",
                path2 = "M120,390c0-20 40,20 40,0c0-20 -40,20 -40,0z";
            r.path(path1).attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(90, 390).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 6
        (function () {
            var path1 = "M170,40c0-20 40,20 40,0c0-20 -40,20 -40,0z",
                path2 = "M270,40c0-20 40,20 40,0c0-20 -40,20 -40,0z";
            r.path(path1).attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{transform: "t100,0r360"}, {transform: ""}],
                now = 1;
            r.arrow(240, 40).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Path 7
        (function () {
            var path1 = "M170,90c0-20 40,20 40,0c0-20 -40,20 -40,0z",
                path2 = "M270,90c0-20 40,20 40,0c0-20 -40,20 -40,0z";
            var t = r.path(path1).attr(dashed);
            r.path(path2).attr({fill: "none", stroke: "#666", "stroke-dasharray": "- ", transform: "r90"});
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{transform: "t100,0r90"}, {transform: ""}],
                now = 1;
            r.arrow(240, 90).click(function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            });
        })();
        // Path 8
        (function () {
            var path1 = "M170,140c0-20 40,20 40,0c0-20 -40,20 -40,0z",
                path2 = "M270,140c0-20 40,20 40,0c0-20 -40,20 -40,0z";
            r.path(path1).attr(dashed);
            var t = r.path(path2).attr({fill: "none", stroke: "#666", "stroke-dasharray": "- ", transform: "r225s2"});
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{transform: "t100,0r225s2"}, {transform: ""}],
                now = 1;
            r.arrow(240, 140).click(function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            });
        })();
        // Text
        (function () {
            r.text(190, 190, "Yay!").attr({font: '10px "Helvetica Neue", Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-"});
            r.text(190, 190, "Yay!").attr({font: '10px "Helvetica Neue", Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-", transform: "t100,0r360s3"});
            var el = r.text(190, 190, "Yay!").attr({font: '10px "Helvetica Neue", Arial', fill: "#fff"}),
            // elattrs = [{x: 290, "font-size": 30, transform: "r360"}, {x: 190, "font-size": 10, transform: "r0"}],
                elattrs = [{transform: "t100,0r360s3"}, {transform: ""}],
                now = 1;
            r.arrow(240, 190).click(function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            });
        })();
        // Rect
        (function () {
            var path1 = "M170,220l40,0 0,40 -40,0z",
                path2 = "M290,220l20,40 -40,0z";
            r.path("M170.5,220.5l40,0 0,40 -40,0z").attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(240, 240).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Rect 2
        (function () {
            var path1 = "M210,270l0,40 -40,0 0-40z",
                path2 = "M290,270l20,40 -40,0z";
            r.path("M210.5,270.5l0,40 -40,0 0-40z").attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(240, 290).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Rect 3
        (function () {
            var path1 = "M190.5,320.5A20,20,0,1,1,190.1,320.5z",
                path2 = "M290.5,320.5l20,40 -40,0z";
            r.path(path1).attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(240, 340).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Rect 3
        (function () {
            var path1 = "M190.5,370.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z",
                path2 = "M290.5,370.5l20,20 -20,20 -20-20z";
            r.path(path1).attr(dashed);
            r.path(path2).attr(dashed);
            var el = r.path(path1).attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
                elattrs = [{path: path2}, {path: path1}],
                now = 1;
            r.arrow(240, 390).node.onclick = function () {
                el.stop().animate(elattrs[+(now = !now)], 1000);
            };
        })();
        // Logo and title
        var logo = r.set(
            r.rect(14, 13, 116, 116, 30).attr({stroke: "none", fill: "#fff", transform: "r45"}),
            r.path("M129.657,71.361c0,3.812-1.105,7.451-3.153,10.563c-1.229,1.677-2.509,3.143-3.829,4.408l-0.095,0.095c-6.217,5.912-13.24,7.588-19.2,7.588c-3.28,0-6.24-0.508-8.566-1.096C81.19,89.48,66.382,77.757,59.604,60.66c3.65,1.543,7.662,2.396,11.869,2.396c15.805,0,28.849-12.04,30.446-27.429l22.073,22.072C127.645,61.351,129.657,66.201,129.657,71.361zM18.953,85.018c-3.653-3.649-5.663-8.5-5.663-13.656c0-5.16,2.01-10.011,5.661-13.656l14.934-14.935c-3.896,13.269-5.569,27.23-4.674,40.614c0.322,4.812,0.987,9.427,1.942,13.831L18.953,85.018zM44.482,46.869c3.279,25.662,23.592,50.991,47.552,57.046c3.903,0.986,7.729,1.472,11.432,1.472c0.055,0,0.107-0.005,0.161-0.005l-18.501,18.503c-3.647,3.646-8.498,5.654-13.652,5.654c-3.591,0-7.021-0.993-10.01-2.815l0.007-0.01c-1.177-0.78-2.298-1.66-3.388-2.593c-0.084-0.082-0.176-0.153-0.26-0.236l-3.738-3.738c-7.688-8.825-12.521-21.957-13.561-37.517C39.736,70.853,41.149,58.578,44.482,46.869").attr({fill: "#f89938", stroke: "none"}),
            r.circle(71, 32, 19).attr({stroke: "none", fill: "#39f"}));
        // logo.translate(390, 70);
        logo.attr({transform: "t390,70..."});
        r.text(460, 250, "Raphaël").attr({font: '30px "Helvetica Neue", Arial', fill: "#fff", stroke: "#fff", "stroke-width": 8, "stroke-linejoin": "round"});
        r.text(460, 250, "Raphaël").attr({font: '30px "Helvetica Neue", Arial', fill: "#000"});
        r.text(460, 290, "Click on arrows to see an animation").attr({font: '16px "Helvetica Neue", Arial', fill: "#fff"});
    };


});


var Preloader = function(options) {

    var Preloader = this;

    var default_options = {
        assets: 'img, audio, video',
        trigger: '.switch',
        complete: null
    };

    var preloaderSwideDuration = 1;
    var swipeBounds = '500%';

    var $preloader = jQuery('#preloader');
    var $preloadBG = $preloader.find('.preload-bg');
    var $cell = $preloader.find('.cell');
    var $loadCircle = $preloader.find('svg').first().find('path');
    var $logoIcon = $preloader.find('svg').first().next().find('path').first();
    var $logoDot = $preloader.find('svg').first().next().find('path').first().next();

    if(options != undefined) jQuery.extend(default_options, options);
    Preloader.options = default_options;

    Preloader.init = function() {

        jQuery(window).scrollTop(0);
        jQuery('body').addClass('locked');

        var $assets = jQuery(Preloader.options.assets);
        var total = $assets.length;
        var loaded = 0;
        var pct = 0;

        // set the loading circle to zero
        TweenMax.set($loadCircle, {drawSVG:'0%'});
        // tween in the the loading circle
        TweenMax.set($cell.find('svg, img'),{autoAlpha:1});

        // play this timeline when the circle is fully loaded:
        var preloadTL = new TimelineMax({paused:true, onComplete:preloaderSwipeOut});
        if(_is_home_page) {
            // fade in the logo icon
            preloadTL.to($logoIcon,.5, {autoAlpha:1, ease:Strong.easeIn});
            // set in the dot
            preloadTL.set($logoDot, {autoAlpha:1, onComplete:function(){
                _sounds.ui.preloader.volume = .5;
                _sounds.ui.preloader.play();
            }}, '+=.7');
        }
        // stall, then fire onComplete
        preloadTL.to($preloader,.15, {});// stall before hiding the preloader

        $assets.each(function(i) {

            var imgURL = jQuery(this).attr('src');
//            console.log('this url ', imgURL);
            var pic = jQuery('<img />').attr('src', imgURL);

            pic.load(function() {
                loaded++;
//                console.log('asset ' + i + ' loaded : ' + loaded + ' of ' + total + ' loaded');
                pct = loaded / total * 100;
//                console.log('pct = ' + pct);

                if(pct < 75) {
                    TweenMax.to($loadCircle,1, {drawSVG: pct + '%', delay:.1});
                } else {
                    // ALL ASSETS ARE LOADED
//                    console.log('75% OF ASSETS ARE LOADED, show me the page');
                    TweenMax.killTweensOf($loadCircle);
                    TweenMax.to($loadCircle,1,{drawSVG:'100%', ease:Strong.easeInOut, onComplete:function() {
                        preloadTL.play();
                    }});

                }// end if loaded >= total
            });
        });// end $assets.each()


    }// init()

    jQuery(document).on('click', Preloader.options.trigger, function(event) {
        event.preventDefault();
//        console.log('switch clicked');
        preloaderSwipeIn(jQuery(this).attr('href'));
    });

    function preloaderSwipeIn(url) {
        var dur = preloaderSwideDuration;
        var preloaderSize = get_window_height()+get_window_width();
        var swipeInTL = new TimelineMax({onComplete:function() {
            window.location = url;
        }});
        swipeInTL.set($loadCircle, {drawSVG:'0%'});
        swipeInTL.set([$logoIcon, $logoDot], {autoAlpha:0});
        swipeInTL.set($preloadBG, {/*top:'-'+swipeBounds*/ top:0, left:0, width:0, height:preloaderSize});
        swipeInTL.set($preloader, {'display':'block'});
        //swipeInTL.staggerTo($preloadBG,preloaderSwideDuration, {top:0, ease:Strong.easeOut},.2);// top as defined in preloader.scss
        //swipeInTL.to($preloadBG[0],dur *.8, {top:0, ease:Strong.easeOut});
        swipeInTL.to($preloadBG[1],dur, {width:preloaderSize, ease:Strong.easeOut});// ease:Strong.easeInOut}, '-='+(dur));
        swipeInTL.to($preloadBG[2],dur, {width:preloaderSize, ease:Strong.easeInOut}, '-='+dur);
        swipeInTL.to($cell, .5, {autoAlpha:1}, '-=.25');
    }// preloaderSwipeIn()

    function preloaderSwipeOut() {
        //return;
        jQuery(document).trigger('PrePreloadEvt');

        var dur = preloaderSwideDuration*2;
        var preloaderSize = get_window_height()+get_window_width();
        var hideTL = new TimelineMax({onComplete:preloadComplete});
        hideTL.set($preloadBG, {width:preloaderSize, height:preloaderSize});
        hideTL.to($cell,.5, {autoAlpha:0, ease:Strong.easeIn});
        hideTL.to($preloadBG[2],dur, {top:'100%', left:'100%', width:0, ease:Strong.easeInOut}, '-='+(dur *.4));
        hideTL.to($preloadBG[1],dur, {top:'100%', left:'100%', width:0, ease:Strong.easeInOut}, '-='+(dur *.85));
        hideTL.to($preloadBG[0],dur *.8, {top:'100%', left:'100%', width:0, ease:Strong.easeInOut}, '-='+(dur *.8));
    }// preloaderSwipeOut()

    function preloadComplete() {
        hidePreloader();

        if(!_is_body_locked || is_mobile()) jQuery('body').removeClass('locked');

        if(isFunction(Preloader.options.complete)) {
            Preloader.options.complete();
        }

        jQuery(document).trigger('PreloadEvt');

    }// preloadComplete

    function hidePreloader() {
        $preloader.css('display', 'none');
    }// hidePreloader()

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

}// Preloader()/**
