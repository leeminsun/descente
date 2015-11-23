$(document).ready(function(){
	function documentSize() {
		var $view = $("#preload"), 
			 $width = $(window).width(),
			 $height = $(window).height();
		$view.css({width:$width+"px", height:$height+"px"});
	}
	function intro() {
		$("#pre-button").fadeIn(1500);
		var r = Raphael("holder", "100%", "100%");
		setTimeout(function(){
			//imgae
			/* 이미지를 이쁘게 조절할수가 없음 ^^
			(function () {
				var path1 = "M0,0l100,0 -200,1080 -100,0";
				var el = r.path(path1).attr({fillfit: "url(http://121.254.179.42:1503/snowsurf/img/intro-img2.jpg)", stroke: "none" }),
					elattrs = [{transform: "t6000,12r0s50"}, {transform: ""}]
					now = 1;
					el.stop().animate(elattrs[+(now = !now)], 5000);
			})();
			*/
			// box3
			(function () {
				var path1 = "M-200,0l200,0 -1000,1080 -200,0";
				var el = r.path(path1).attr({fill: "#242811", stroke:"none"}),
					elattrs = [{transform: "t6000,8r0s60"}, {transform: ""}],
					now = 1;
					//el.stop().animate(elattrs[+(now = !now)], 4000);
			})();
			// box2
			(function () {
				var path1 = "M0,0l200,0 -1000,1080 -200,0";
				var el = r.path(path1).attr({fill: "#fff", stroke:"none"}),
					elattrs = [{transform: "t9000,40r0s50"}, {transform: ""}],
					now = 1;
				el.stop().animate(elattrs[+(now = !now)], 3000);
			})();
			// box1
			(function () {
				var path1 = "M100,0l200,0 -1000,1080 -200,0";
				var el = r.path(path1).attr({fill: "#000", stroke:"none"}),
					elattrs = [{transform: "t9000,40r0s50"}, {transform: ""}],
					now = 1;
				el.stop().animate(elattrs[+(now = !now)], 3000);
			})();
			/*(function(){
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
							duration: 2000,
							easing: 'easeOutQuart',
							progress: function () {
								var now = this.left;
								$this.css({
									clip: 'rect(0px ' + w + 'px ' + h + 'px ' + now + 'px)'
								});
								$("#pre-img").css({display:"none"});
							}
						});
						setTimeout(function(){
							$("#pre-button").css({display:"none"});
						},500);
						setTimeout(function(){
							$("body").addClass("loaded");
							$("#preload").slideUp(1000);

				
						},3000);
					});
				}
			})();*/
		},2000);
	}
	intro();
	documentSize();
	$("#contents").on("click", function(){
		$("#preload").slideDown(1000);
	});
	$(window).resize(function(){
		documentSize();
	});
});