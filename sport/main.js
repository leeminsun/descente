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
 * Created by minsun on 15. 11. 18..
 */
