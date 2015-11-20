/* 인트로 무비 동적 생성 스크립트 */

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;


//IE8
var rv = -1;
if (navigator.appName == 'Microsoft Internet Explorer') {
		 var ua = navigator.userAgent;
		 var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			 if (re.exec(ua) != null){
				 rv = parseFloat(RegExp.$1);
			 }
}
function onYouTubeIframeAPIReady() {

	player = new YT.Player('player', {
		height: '100%',
		width: 'auto',
		videoId: 'eAjnRzvpEEs',
		playerVars: {'vq':'hd1080', 'modestbranding':'1', 'autoplay': 1, 'controls': 0, 'version': 3, 'showinfo': 0, 'rel': 0, 'loop':1,'wmode':'transparent'},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
    
	

}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {

	if (event.data == YT.PlayerState.ENDED){ /*youtube 영상 종료됐을때*/
		player.destroy();
	 	jQuery.nextFunc();
	}
}

//function onPlayerStateChange2(event) {
//
//	if (event.data == YT.PlayerState.ENDED){ /*youtube 영상 종료됐을때*/
//
//	 	jQuery.nextFunc2();
//	}
//}
//
//function stopVideoFunc(mc) {
//	if(rv != 8){
//		//mc.stopVideo();
//	}
//
//}
//function playVideoFunc(mc) {
//	if(rv != 8){
//		mc.seekTo(0);
//		mc.playVideo();
//	}
//}
