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
				var path1 = "M0,0l100,0 -200,1080 -100,0";
				var el = r.path(path1).attr({fill: "#242811", stroke:"none"}),
					elattrs = [{transform: "t6000,8r0s60"}, {transform: ""}]
					now = 1;
					el.stop().animate(elattrs[+(now = !now)], 4000);
			})();

			// box2
			(function () {
				var path1 = "M0,0l100,0 -200,1080 -100,0";
				var el = r.path(path1).attr({fill: "#fff", stroke:"none"}),
					elattrs = [{transform: "t6000,12r0s50"}, {transform: ""}]
					now = 1;
					el.stop().animate(elattrs[+(now = !now)], 4000);
			})();
			// box1
			(function () {
				var path1 = "M100,0l100,0 -200,1080 -100,0";
				var el = r.path(path1).attr({fill: "#000", stroke:"none"}),
					elattrs = [{transform: "t7000,4r0s50"}, {transform: ""}]
					now = 1;
					el.stop().animate(elattrs[+(now = !now)], 3000);
			})();
		},2000);

		/*
		수정전 초기본..
		(function () {
			var path1 = "M100,0l100,0 -100,1080 -100,0z";
				//path2 = "M1900,0l100,0 -100,1080 -100,0z";
			//r.path(path1).attr({fill: "#fff"});
			//var t = r.path(path2).attr({fill: "#fff", stroke: "none"});
			var el = r.path(path1).attr({fill: "#fff", stroke:"none"}),
				//elattrs = [{transform: "t1900,0r225s2"}, {transform: ""}],
				elattrs = [{transform: "t1900,0r360s3"}, {transform: ""}]
				now = 1;
				el.stop().animate(elattrs[+(now = !now)], 1000);
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
		 setTimeout(function(){
			$("body").addClass("loaded");
		}, 2000);*/
	}
	 intro();
	documentSize();
	$(window).resize(function(){
		documentSize();
	});
	/* 
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
	 */
});