$(document).ready(function(){

	motion1('default');
	motion1('play');

	motion2('default');
	motion2('play');

	function minHeightCtrl(){
		$(window).resize(function(){
			console.log($(window).height(), $(window).height() - $("body").height());
			if($(window).height() < 900){
				$(".panel-footer").css({"position":"relative", "width":"100%"});
				$("body").css({"height":$(window).height(),"padding-bottom":"0"});
			}else{
				if(($(window).height() - $("body").height() <= 0) ){
					//alert("본문이 크다");
					$(".panel-footer").css({"position":"relative", "width":"100%"});
					$("body").css({"height":$(window).height(),"padding-bottom":"0"});
				}else if(($(window).height() - $("body").height() > 0) ){
					//alert("본문이 작다");
					$(".panel-footer").css({"position":"fixed", "width":"100%","bottom":"0"});
					$("body").css({"height":$(window).height(),"padding-bottom":"150px"});
				}
				var totalHeight = $("#container").outerHeight() + $("#wrap > footer").outerHeight(),
					extraHeight = $(window).height() - totalHeight;
			}
		$(".mo1 .middleTxt").css({"margin-top": ($("body").height() / 2) - 65 })
		});

		$(window).trigger("resize");
	}

	/* 기능 초기화 */
	$(window).load(function(){
		// 최소높이 제어
		minHeightCtrl();
		/*if($("#pageChange").hasClass("play")){
			//alert("open");
			$("#pageChange").removeClass("play");
		}else{
			//alert("not");
			$("#pageChange").addClass("play");
		}*/
	});
});


function motion1(status){

	var $con = $(".mo1"),
		$cell = $con.children('[class^="con1Mo"]');
	clearTimeout($con.data('start_timer'));
	switch(status.toLowerCase()){
		case 'default':
			$cell.css({'opacity': '0'});
			break;
		case 'stop':
			$cell.filter('.con1Mo').css({'opacity': '1'});
			break;
		case 'play':
			var startTimer = setTimeout(function () {
				$cell.filter('.con1Mo').show().stop(true).animate({'opacity': '1'});
			}, 2000, 'easeInOutQuint');

			$con.data('start_timer', startTimer);
		break;
	}
}

function motion2(status){

	var $con = $("#pageChange"),
		$cell = $con.children('[class^="square"]');
	clearTimeout($con.data('start_timer'));
	switch(status.toLowerCase()){
		case 'default':
			$cell.css({'left': '-40%'});
			break;
		case 'stop':
			$cell.filter('.square').css({'left': '-2000px'});
			break;
		case 'play':
			var startTimer = setTimeout(function () {
				$cell.filter('.square1').show().stop(true).delay(1000).animate({'left': '5000px','width':'400px'});
				$cell.filter('.square2').show().stop(true).delay(1000).animate({'left': '4000px','width':'400px'});
				$cell.filter('.square3').show().stop(true).delay(1000).animate({'left': '5000px','width':'200px'});

				$con.parent().show().stop(true).delay(3000).slideUp(500);

			}, 3500, 'easeOutQuint');

			$con.data('start_timer', startTimer);
		break;
	}
}