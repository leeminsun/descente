$(document).ready(function(){
   function intro() {
	   setTimeout(function(){
		   $("#pre-button, #pre-mask").fadeIn(1000);
	   },1500);
	   setTimeout(function(){
			$("#loading").fadeOut(1000);
	   },3000);
   }
   intro();
	$("#intro #visual .action .button").on("click", function(e){
		e.preventDefault();
		var contTop = $("#contents").offset().top;
		$("body, html").animate({scrollTop: contTop }, 500);
	});
	$("#snowsurf-greet .action .button").on("click", function(e){
		e.preventDefault();
		$("body, html").animate({scrollTop: 0 }, 500);
	});
});