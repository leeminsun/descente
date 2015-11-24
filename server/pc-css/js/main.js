$(document).ready(function(){
	function documentSize() {
	  var $view = $("#preload"), 
		  $width = $(window).width(),
		  $height = $(window).height();
	  $view.css({width:$width+"px", height:$height+"px"});
	}
	function intro() {
	  $("#pre-button, #pre-mask").fadeIn(1500);
	  setTimeout(function(){
		$("#box1").addClass("on");
	  }, 1500);
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