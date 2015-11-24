$(document).ready(function(){
	function documentSize() {
	  var $view = $("#preload"), 
		  $width = $(window).width(),
		  $height = $(window).height();
	  $view.css({width:$width+"px", height:$height+"px"});
	}
	function intro() {
	  $("#pre-button, #pre-mask").fadeIn(1500);
	  var r = Raphael("holder", "100%", "100%");
	  setTimeout(function(){
		// box3
		(function () {
			var path1 = "M500,0l1000,0 -1000,1080 -1000,0";
			var el = r.path(path1).attr({fill: "url(img/intro-bg.jpg)", stroke:"none"}),
			   elattrs = [{transform: "t0,0r0t4000,0"}, {transform: ""}],
			   now = 1;
			   el.stop().animate(elattrs[+(now = !now)], 1500, "easeOutExpo");
		 })();
		 // box2
		 (function () {
			var path1 = "M200,0l400,0 -800,800 -480,0";
			var el = r.path(path1).attr({fill: "#000", stroke:"none"}),
			   elattrs = [{transform: "t6000,40r0s15"}, {transform: ""}],
			   now = 1;
			el.stop().animate(elattrs[+(now = !now)], 1000, "easeOutExpo");
		 })();
		 // box1
		 (function () {
			var path1 = "M400,0l600,0 -1200,1080 -600,0";
			var el = r.path(path1).attr({fill: "url(img/intro-bg.jpg)", stroke:"none"}),
			   elattrs = [{transform: "t0,0r0t4000,0"}, {transform: ""}],
			   now = 1;
			el.stop().animate(elattrs[+(now = !now)], 1500, "easeOutExpo");
		 })();
		 (function(){
			var $container = $('#loading'),
			$masks     = $container.find('.mask'),
			maskLength = $masks.length,
			maskData   = [];
			$masks.each(function (i) {
			   maskData[i] = { left: 0 };
			});
			resizeMask(-1);
			function resizeMask (active) {
			   var w = $container.width(),
				  h = $container.height();
			   $masks.each(function (i) {
				  var $this = $(this),
					 l;
				  if (active === -1) {
					 l = w / 1 * i;
				  } else if (active < i) {
					 l = w * (1 - 0.1 * (1 - i));
				  } else {
					 l = w * 0.05 * i;
				  }
				  $(maskData[i]).stop(true).animate({ left: l }, { 
					 duration: 500,
					 easing: 'easeOutQuart',
					 progress: function () {
						var now = this.left;
						$this.css({
							'clip': 'rect(0px ' + w + 'px ' + h + 'px ' + now + 'px)'
						});
						$("#pre-img").css({display:"none"});
					 }
				  });
				  setTimeout(function(){
					 $("#pre-button").css({display:"none"});
				  },200);
				  setTimeout(function(){
					 $("body").addClass("loaded");
					 $("#holder, #loading").remove();
				  },1500);
			   });
			}
		 })();
	  },2000);
	}
	intro();
	documentSize();
	$(window).resize(function(){
	  documentSize();
	});
	$("#intro #visual .action .button").on("click", function(e){
		e.preventDefault();
		var contTop = $("#contents").offset().top;
		$("body, html").animate({scrollTop: contTop }, 500);
	});
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;
	function wheel() {
		$("#preload").on('mousewheel' , function(e, delta){
			var delta = e.originalEvent.wheelDelta
					,contTop = $("#contents").offset().top;
			if(delta > 0) {

			} else {
				$('html, body').stop().animate({'scrollTop':contTop},500);
			};
		});
	}
	$("#snowsurf-greet .action .button").on("click", function(e){
		e.preventDefault();
		$("body, html").animate({scrollTop: 0 }, 500);
	});
});