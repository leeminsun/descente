/******************************************************************************
*	용도		:	애드캡슐 페럴록스
*	버전		:	1.0
*	참고사항	:	추가사항이 생기면 알려주시고, 버전업 해주세요
*	제작		:	애드캡슐 w
*******************************************************************************/

//IE8
var rv = -1;
if (navigator.appName == 'Microsoft Internet Explorer') {
		 var ua = navigator.userAgent;
		 var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			 if (re.exec(ua) != null){
				 rv = parseFloat(RegExp.$1);
			 }
}

jQuery(document).ready(function ($){

	var aNum = 0 // 초기 설정값 1이면 스크롤 움직임, 0이면 스크롤 안움직임
	var menuNum = 0 // 각 전체 현재 슬라이드를 가리키는 값
	var menuNum2 = 0 // 각 두번째 슬라이드 현재값을 가리키는 값
	var menuNum3 = 0 // 각 두번째 슬라이드 현재값을 가리키는 값

	var distance = 100;
	var aniTime = 500 // 오브젝트 애니메이션 시간
	var scrollFlag = false;	// 스크롤 한번만 동작하도록 하는 변수
	var slideNum = 3;	// 슬라이드 총갯수
	var slideNum2 = 4;	// 슬라이드 총갯수
	var slideNum3 = 7;	// 슬라이드 총갯수


	var aload = false; // 서브2 불러오기
	var bload =	false; // 서브2 불러오기
	var bload2 = true; // 서브2 불러오기
	var cload = false; // 서브4 불러오기
	var dload = false; // 서브5 불러오기
    var deg = 0;
    
    introPlayerSize();

    function introPlayerSize(){
        if(rv == 9 || rv == 10){   
            $('#player video').css({'width':$(window).width(),'height':'auto'});    
        }
    }
    

	opacityFunc($('.technology_wrap .msk'), 0.8);
	opacityFunc($('.technology_wrap .visual_02, .technology_wrap .visual_03'), 0);
	opacityFunc($('.product_over'), 0);
//	opacityFunc($('.bg_on'), 0);
    $('.bg_on').removeClass('on');
//	opacityFunc($('.technology_wrap > ul > li tit'), 0);
//	opacityFunc($('.technology_wrap > ul > li txt'), 0);



/* opacity 함수 */
function opacityFunc(mc, num){
		mc.css('opacity',num);
}


   



	 $(window).resize(function () {
	 	resizeFunc()
	 });
	 function resizeFunc()
	 {
	 	introPlayerSize();
         $('#slide1.bg').css('height',$(window).height());
		$('#slide2.bg').css('height',$(window).height());
		$('.technology_wrap').css('height',$(window).height());
		$('.product_wrap').css('height',$(window).height());
		$('#slide1.bg iframe').css('height',$(window).height());
	//	$('#slide3.bg').css('height',$(window).height());
		jQuery.dNumTopFunc($('#slide3').offset().top);

//		if($(window).height() < 800){
//			$('.visual_wrap, .product_02, #player5').css('-moz-transform','scale(.7)')
//		}

	}

	 	//$('#slide1 iframe').attr('width',$(window).width());
	 	//$('#slide1 iframe video').css('width',$(window).width());


		$('.product_select li a').click(function (e){
			sNum = $(this).parent('li').index();

			$('.product_02 .visual li').eq(sNum).css('display','block');
			$('.product_02 .visual li').eq(sNum).siblings().css('display','none');
			$(this).parent().addClass('on')
			$(this).parent().siblings().removeClass('on')

			return false;
		});

/*
		$('.product_over, .product_02 .visual').hover(function (e){
			$('.product_over').css('display','block');
			$('.product_over').stop().animate({'opacity':'0.9', 'left':'0'}, aniTime);
		}, function(){
			$('.product_over').stop().animate({'opacity':'0', 'left':'-100%'}, aniTime, function(){
				$('.product_over').css('display','none');
			});
		});

*/
var inter = 0;
var $simg = $('.skip_btn_img');
    



	function testFunc(){
		
		$('#slide_btn3 a').trigger('click');
	}
 //$('#player').css('opacity','0');
	//-----------------------------새로고침 관련 함수--------------------------------------------
	$(window).load(function(){
        
//        
        $('#player video').on('ended',function(){
            jQuery.nextFunc();
        });
        $('#player video object').attr({'width':$(window).width(),'height':$(window).height()});
        
       
      
//        if(rv != 8){
//            var player = videojs('intro-video', { }, function() {
//        //  console.log('Good to go!');
//            
//          this.play(); // if you don't trust autoplay for some reason 
//           // $('#player').delay(100).animate({'opacity':'1'}, aniTime);
//          // How about an event listener? 
//          this.on('ended', function() {
//            jQuery.nextFunc();
//              
//          });
//        });
//        }
//        
       
        
		var scrollTo = '0px';
		$('body, html').delay(100).animate({scrollTop:scrollTo},1);


		$('.product_wrap').css('opacity','0');

		resizeFunc();
		startFunc();
		//jQuery.nextFunc(); //테스트
		//testFunc();

	});



	$('.parallax').css({'display':'block'});

	$('.navigation').css({'display':'block'});

	function startFunc(){


		var links = $('#snb_main li a')
		slide = $('.parallax');

		mywindow = $(window);
		htmlbody = $('html,body');

		$('.technology_wrap .sub_lnb').css({'margin-left':-$('.technology_wrap .sub_lnb').width()/2});

		$('.product_wrap .sub_lnb').css({'margin-left':-$('.product_wrap .sub_lnb').width()/2});



		function goToByScroll(dataslide){
			htmlbody.animate({
				scrollTop: $('#slide'+dataslide+'').offset().top
			}, 2000, 'easeInOutExpo');
		}


		links.click(function (e){ //왼쪽 메인네비 클릭시
			e.preventDefault();

		//	upDownFuncReset()
		//	upDownFuncReset2()

			var iNum2 = $(this).parent().attr('id')
			var iNum = Number(iNum2.replace(/slide_btn/gi,""));

			dataslide = iNum
			goToByScroll(dataslide);
			return false;
		});

		if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
		wheel()
		function wheel(event){
			$(document)
			.mousewheel(function(event, delta2){

					delta = delta2 * 2
					handle(delta2);
//                 console.log(delta2);
					jQuery.deltaFunc(delta2);

				 if (event.preventDefault) event.preventDefault();
				 event.returnValue = false;
			});


		}



		function handle(dNum){
			var swh = $(window).outerHeight()/2;
			scrollTop = $(window).scrollTop();

	//		console.log(aNum +":"+ scrollFlag)

				if(aNum != 0){
					if(scrollFlag != true){
						if(dNum < 0){ //아래로

							if(menuNum < slideNum-1){ // 아래로 한번에 슬라이드
								menuNum = menuNum + 1

                                htmlbody.animate({
                                scrollTop: $('#slide'+(menuNum+1)+'').offset().top
                                 }, 1000, 'easeInOutExpo');
                                
//                                deg = deg-90;
//                                $('#wrap').css('transform','translateZ(-300px) rotateX('+deg+'deg)');
                                
                               
                                 scrollFlag = true


							}else if(menuNum == slideNum-1){ // 슬라이드3에서 영상 다음 썸네일 넘어갈때

								if(scrollTop == $('#slide3').offset().top){
									scrollFlag = true
									htmlbody.animate({
										scrollTop: $('#slide3').offset().top + 960
									}, 1000, 'easeInOutExpo', function(){
										scrollFlag = false;
									});

								}else{ // 아래로 조금씩 이동하는 경우

									htmlbody.stop().animate({
                                        scrollTop: $(window).scrollTop() - (distance * delta)
                                    }, aniTime);
								}
							}

						}else{ // 위로

							if(menuNum == slideNum-1){ //
//console.log(dNum+": dNum")
                                // 썸네일에서 영상컷으로 한번에 슬라이드
								if($('#slide'+(menuNum+1)+'').offset().top < $(window).scrollTop())
								{
									if(scrollTop < $('#slide3').offset().top+1160){
										scrollFlag = true
										htmlbody.animate({
											scrollTop: $('#slide3').offset().top
										}, 1000, 'easeInOutExpo', function(){
											scrollFlag = false;
										});


									}else{ // 마지막 슬라이드에서 위로 조금씩 슬라이드

										htmlbody.stop().animate({
												scrollTop: $(window).scrollTop() - (distance * delta)
											}, aniTime);
									}

								}else{
									
                                    htmlbody.animate({
                                        scrollTop: $('#slide'+(menuNum)+'').offset().top
                                         }, 1000, 'easeInOutExpo');
                                 scrollFlag = true
									

								}

							}
							else if(menuNum > 0){ // 위로 한번에 슬라이드

								menuNum = menuNum - 1
                                
//                                deg = deg+90;
//                                $('#wrap').css('transform','translateZ(-300px) rotateX('+deg+'deg)');
                                
                                htmlbody.animate({
                                scrollTop: $('#slide'+(menuNum+1)+'').offset().top
                                 }, 1000, 'easeInOutExpo');
                               
                                scrollFlag = true
							}

						}
					}
				}else if(aNum == 0){
				//첫번째 슬라이드  animate

				if(scrollTop>=$('#slide1').offset().top-swh/2 && scrollTop<$('#slide2').offset().top-swh){
					if(bload2 == false){


						if(scrollFlag != true){
							scrollFlag = true
							if(dNum < 0){ //아래로
								menuNum2 ++

								if(menuNum2 < slideNum2)
								{
								upDownFunc(menuNum2);
								}
								else if(menuNum2 == slideNum2)
								{
								aNum = 1;
								scrollFlag = false;
								menuNum2 = 0;

								}

							}else{ // 위로

								if(menuNum2 >= 0)
								{
									menuNum2 --
									upDownFunc(menuNum2);
									if(menuNum2 == -1){
										menuNum2 = 0;
									}

								}


							}
					//		console.log(menuNum2)
						}
					}
				}	//첫번째 슬라이드  animate end
				if(scrollTop>=$('#slide2').offset().top-swh/2 && scrollTop<$('#slide3').offset().top-swh){
					if(scrollFlag != true){
						scrollFlag = true
						if(dNum < 0){ //아래로
							menuNum3 ++
							if(menuNum3 < slideNum3)
							{
							upDownFunc2(menuNum3);
							}
							else if(menuNum3 == slideNum3)
							{
							aNum = 1;
							scrollFlag = false;

							}

						}else{ // 위로
							menuNum3 --
							if(menuNum3 >= 0)
							{
							upDownFunc2(menuNum3);
							}
							else if(menuNum3 == -1)
							{
							aNum = 1;
							scrollFlag = false;
							}

						}
					//	console.log(menuNum3)
					}
				}	//두번째 슬라이드  animate end


			}
		}

		function upDownFuncReset(){
			$('.technology_wrap > ul > li').eq(0).css('display','none');
			$('.technology_01 .tit').css({'top':'-100%','left':'50%'});
			$('.technology_01 .txt').css({'bottom':'-100%','left':'50%'});
			$('.technology_02 .tit').css({'top':'70px','left':'150%'});
			$('.technology_02 .txt').css({'bottom':'200px','left':'150%'});
			$('.technology_03 .tit').css({'left':'150%'});
			$('.technology_03 .txt').css({'left':'150%'});
			$('.technology_04 .tit').css({'right':'150%'});
			$('.technology_04 .txt').css({'right':'150%'});
			$('.technology_wrap .msk.msk01').css({'bottom':'-100%'});
			$('.technology_wrap .msk.msk03').css({'left':'150%'});
			$('.technology_wrap .msk.msk04').css({'right':'150%'});
			$('.technology_wrap .visual_01').stop().animate({'opacity':'1'}, aniTime);
			$('.technology_wrap .visual_02').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_03').stop().animate({'opacity':'0'}, aniTime);
			$('.sub_lnb li').removeClass('on');
			$('.sub_lnb li').eq(0).addClass('on');
		}


		function upDownFunc(menuNum2){


			$('.technology_wrap > ul > li').eq(menuNum2).css('display','block');


			$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').addClass('blur');
			$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').addClass('blur');


			$('.technology_wrap > ul > li').eq(menuNum2).stop().animate({'opacity':'1'}, aniTime, function(){
					$('.technology_wrap .section').removeClass('active');
					$(this).find('.section').addClass('active');

				scrollFlag = false;
			});

			$('.sub_lnb li').eq(menuNum2).addClass('on');
			$('.sub_lnb li').eq(menuNum2).siblings().removeClass('on');

		if(menuNum2 == 0){
			$('.technology_01 .tit').css({'top':'-100%','left':'50%'});
			$('.technology_01 .txt').css({'bottom':'-100%','left':'50%'});
			$('.technology_wrap .msk.msk01').css({'bottom':'-100%'});

			$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').stop().animate({'left':'50%','top':'70px'}, aniTime, 'easeInOutCubic', function(){
				$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').removeClass('blur');
				$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').removeClass('blur');
			});

			$('.technology_wrap .msk.msk01').stop().animate({'bottom':'0'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').animate({'left':'50%','bottom':'200px'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2+1).find('.tit').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2+1).find('.txt').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');



		}else if(menuNum2 == 1){
			$('.technology_wrap .visual_01').stop().animate({'opacity':'1'}, aniTime);
			$('.technology_wrap .visual_02').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_03').stop().animate({'opacity':'0'}, aniTime);

			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.tit').stop().animate({'left':'-150%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.txt').stop().animate({'left':'-150%'}, aniTime, 'easeInOutCubic');

			$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').stop().animate({'left':'50%','top':'70px'}, aniTime, 'easeInOutCubic', function(){
				$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').removeClass('blur');
				$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').removeClass('blur');
			});

			$('.technology_wrap .msk.msk01').stop().animate({'bottom':'0'}, aniTime, 'easeInOutCubic');

			$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').stop().animate({'left':'50%','bottom':'200px'}, aniTime, 'easeInOutCubic');

			$('.technology_wrap > ul > li').eq(menuNum2+1).find('.tit').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2+1).find('.txt').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap .msk.msk03').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');

		}
		else if(menuNum2 == 2){
			$('.technology_wrap .visual_01').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_02').stop().animate({'opacity':'1'}, aniTime);
			$('.technology_wrap .visual_03').stop().animate({'opacity':'0'}, aniTime);

			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.tit').stop().animate({'top':'-100%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.txt').stop().animate({'bottom':'-100%'}, aniTime, 'easeInOutCubic');


				$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').delay(200).animate({'left':'50%', 'right':'0'}, aniTime, 'easeInOutCubic', function(){
					$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').removeClass('blur');
					$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').removeClass('blur');
				});

				$('.technology_wrap .msk.msk03').stop().animate({'left':'50%', 'right':'0'}, aniTime, 'easeInOutCubic');

				$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').delay(300).animate({'left':'50%', 'right':'0'}, aniTime, 'easeInOutCubic');
				$('.technology_wrap > ul > li').eq(menuNum2+1).find('.tit').stop().animate({'right':'150%'}, aniTime, 'easeInOutCubic');
				$('.technology_wrap > ul > li').eq(menuNum2+1).find('.txt').stop().animate({'right':'150%'}, aniTime, 'easeInOutCubic');
				$('.technology_wrap .msk.msk01').stop().animate({'bottom':'-100%'}, aniTime, 'easeInOutCubic');
				$('.technology_wrap .msk.msk04').stop().animate({'right':'150%'}, aniTime, 'easeInOutCubic');


		}else if(menuNum2 == 3){
			$('.technology_wrap .visual_01').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_02').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_03').stop().animate({'opacity':'1'}, aniTime);


			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.tit').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');
			$('.technology_wrap > ul > li').eq(menuNum2-1).find('.txt').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');


				$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').delay(200).animate({'right':'50%'}, aniTime, 'easeInOutCubic', function(){
					$('.technology_wrap > ul > li').eq(menuNum2).find('.tit').removeClass('blur');
					$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').removeClass('blur');
				});
				//$('.technology_wrap .msk.msk04').css({'right':'150%','left':''});
				$('.technology_wrap .msk.msk03').stop().animate({'left':'150%'}, aniTime, 'easeInOutCubic');
				$('.technology_wrap .msk.msk04').stop().animate({'right':'50%'}, aniTime, 'easeInOutCubic');

				$('.technology_wrap > ul > li').eq(menuNum2).find('.txt').delay(300).animate({'right':'50%'}, aniTime, 'easeInOutCubic');
			}

		}


		$('.technology_wrap .sub_lnb li a').click(function(){
			menuNum2 =	$(this).parent().index();
			upDownFuncReset()
			upDownFunc(menuNum2);

			return false;

		})



		$('.technology_wrap .sub_lnb > a').click(function (e){

			if($(this).hasClass('prev')){
				if(menuNum2 > 0){
					menuNum2 = menuNum2 -1;
					upDownFunc(menuNum2)
				}

			}else if($(this).hasClass('next')){
				if(menuNum2 < slideNum2 -1){
					menuNum2 = menuNum2 +1;
					upDownFunc(menuNum2)
				}
			}

			return false;
		});


		function upDownFuncReset2(){
			$('.product_wrap > ul > li').css({'left':'100%'});
			$('.product_wrap > ul > li:first-child').css({'left':'0'});
            $('.product_02 .visual li').css('display','none');
            $('.product_02 .visual li:first-child').css('display','block');
            $('.product_select li').removeClass('on');
            $('.product_select li:first-child').addClass('on');
			$('.product_03 .tit').removeClass('on');
			$('.product_03 .txt').removeClass('on');
			$('.product_04 .tit').removeClass('on');
			$('.product_04 .txt').removeClass('on');
			$('.product_05 .tit').removeClass('on');
			$('.product_05 .txt').removeClass('on');
			

			$('.product_04 .imgBox').css({'opacity':'0'});
			$('.product_05 .imgBox').css({'opacity':'0'});
			$('.product_0601 strong').css({'top':'150%','opacity':'0'});
			$('.product_0602 strong').css({'top':'150%','opacity':'0'});
			$('.product_0603 strong').css({'top':'150%','opacity':'0'});
			$('.product_0604 strong').css({'top':'150%','opacity':'0'});
			$('.product_0605 strong').css({'top':'150%','opacity':'0'});
			$('.product_0601 span').css({'opacity':'0'});
			$('.product_0602 span').css({'opacity':'0'});
			$('.product_0603 span').css({'opacity':'0'});
			$('.product_0604 span').css({'opacity':'0'});
			$('.product_0605 span').css({'opacity':'0'});
            $('.product_06 .tit').removeClass('on');
			$('.product_07 .tit').removeClass('on');
			$('.product_07 .txt').removeClass('on');
			$('.product_07 .product_btn').css({'opacity':'0'});

			$('.technology_wrap .msk.msk01').css({'bottom':'-100%'});
			$('.technology_wrap .msk.msk03').css({'left':'150%'});
			$('.technology_wrap .msk.msk04').css({'right':'150%'});
			$('.technology_wrap .visual_01').stop().animate({'opacity':'1'}, aniTime);
			$('.technology_wrap .visual_02').stop().animate({'opacity':'0'}, aniTime);
			$('.technology_wrap .visual_03').stop().animate({'opacity':'0'}, aniTime);
			$('#snb_area ol li').removeClass('on');
			$('#snb_area ol li').eq(1).addClass('on');
//			opacityFunc($('.bg_on'), 0);
            $('.bg_on').removeClass('on');
            
			$('.product_03 .tit').removeClass('on');
			$('.product_03 .txt').removeClass('on');

		}


		$('.product_wrap > ul > li').eq(0).find('iframe').css('opacity','0');
		function upDownFunc2(menuNum3){
            $('.bg_on').removeClass('on');
			//$('.product_wrap > ul > li').eq(menuNum3).find('.tit').addClass('blur');
		//	$('.product_wrap > ul > li').eq(menuNum3).find('.txt').addClass('blur');
		//	stopVideoFunc(player5);
            $('#player5').html('');
//			$('.product_wrap > ul > li').eq(0).find('iframe').css('opacity','0');
			if(menuNum3 == 0){

				$('#player5').html("<iframe name='ifrMovie' title='descent 영상' width='1200' height='675' src='http://www.youtube.com/embed/EpxPIBfaYQc?rel=0&showinfo=0&controls=1&vq=hd720&version=3&rel=0&iv_load_policy=3&autoplay=1&loop=1' frameborder='0' allowfullscreen='true'></iframe>");

			}else if(menuNum3 == 1){

                $('.product_02 .visual li').css('display','none');
                $('.product_02 .visual li:first-child').css('display','block');
                $('.product_select li').removeClass('on');
                $('.product_select li:first-child').addClass('on');

			}else if(menuNum3 == 2){

//				$('.product_03 .bg_on').css({'opacity':'0'});

				$('.product_03 .tit').removeClass('on');
				$('.product_03 .txt').removeClass('on');

				$('.product_03 .txt').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic', function(){
					$('.product_03 .tit').addClass('on');
					$('.product_03 .txt').addClass('on');
					$('.product_03 .bg_on').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');
                    $('.product_03 .bg_on').addClass('on');
				});
			}else if(menuNum3 == 3){
//				$('.product_04 .bg_on').css({'opacity':'0'});

				$('.product_04 .tit').removeClass('on');
				$('.product_04 .txt').removeClass('on');

				$('.product_04 .txt').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic', function(){
					$('.product_04 .tit').addClass('on');
					$('.product_04 .txt').addClass('on');
					$('.product_04 .bg_on').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');
                    $('.product_04 .bg_on').addClass('on');
				});

				$('.product_04 .imgBox').css({'opacity':'0'});
				$('.product_04 .imgBox').delay(800).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');
			}else if(menuNum3 == 4){
//				$('.product_05 .bg_on').css({'opacity':'0'});

				$('.product_05 .tit').removeClass('on');
				$('.product_05 .txt').removeClass('on');

				$('.product_05 .txt').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic', function(){
					$('.product_05 .tit').addClass('on');
					$('.product_05 .txt').addClass('on');
					$('.product_05 .bg_on').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');
                    $('.product_05 .bg_on').addClass('on');
				});

				$('.product_05 .imgBox').css({'opacity':'0'});
				$('.product_05 .imgBox').delay(800).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');

			}else if(menuNum3 == 5){
                $('.product_06 .tit').removeClass('on');
				$('.product_0601 strong').css({'top':'150%','opacity':'0'});
				$('.product_0602 strong').css({'top':'150%','opacity':'0'});
				$('.product_0603 strong').css({'top':'150%','opacity':'0'});
				$('.product_0604 strong').css({'top':'150%','opacity':'0'});
				$('.product_0605 strong').css({'top':'150%','opacity':'0'});
				$('.product_0601 span').css({'opacity':'0'});
				$('.product_0602 span').css({'opacity':'0'});
				$('.product_0603 span').css({'opacity':'0'});
				$('.product_0604 span').css({'opacity':'0'});
				$('.product_0605 span').css({'opacity':'0'});


				$('.product_0601 strong').delay(0).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0602 strong').delay(300).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0603 strong').delay(600).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0604 strong').delay(900).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0605 strong').delay(1200).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0601 span').delay(0).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0602 span').delay(300).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0603 span').delay(600).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0604 span').delay(900).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic');
				$('.product_0605 span').delay(1200).animate({'top':'50%','opacity':'1'}, aniTime, 'easeInOutCubic',function(){
                    $('.product_06 .tit').addClass('on');
                });
			}else if(menuNum3 == 6){

				$('.product_07 .tit').removeClass('on');
				$('.product_07 .txt').removeClass('on');

				$('.product_07 .txt').delay(300).animate({'opacity':'1'}, aniTime, 'easeInOutCubic', function(){
					$('.product_07 .tit').addClass('on');
					$('.product_07 .txt').addClass('on');

				});

				$('.product_07 .product_btn').css({'opacity':'0'});
				$('.product_07 .product_btn').delay(800).animate({'opacity':'1'}, aniTime, 'easeInOutCubic');
			}

		//	$('.product_wrap > ul > li').eq(menuNum3).css('display','block');
		//	$('.product_wrap > ul > li').eq(menuNum3).siblings().css('display','none');

			$('.product_wrap > ul > li').eq(menuNum3).stop().animate({'left':'0'}, aniTime, function(){
					$('product_wrap .section').removeClass('active');
					$(this).find('.section').addClass('active');

					scrollFlag = false;
			});
			if(menuNum3 > 0){
				$('.product_wrap > ul > li').eq(menuNum3-1).stop().animate({'left':'-100%'}, aniTime);
			}
				$('.product_wrap > ul > li').eq(menuNum3+1).stop().animate({'left':'100%'}, aniTime);

			$('.product_wrap .sub_lnb li').eq(menuNum3).addClass('on');
			$('.product_wrap .sub_lnb li').eq(menuNum3).siblings().removeClass('on');


		}

		$('.product_wrap .sub_lnb li a').click(function(){
			menuNum3 =	$(this).parent().index();

			$('.product_wrap > ul > li').eq(0).siblings().stop().animate({'opacity':'0'}, aniTime, function(){
				upDownFuncReset2();
				upDownFunc2(menuNum3);

				$('.product_wrap > ul > li').animate({'opacity':'1'}, aniTime, function(){

				});

			});

			return false;

		})

		$('.product_wrap .sub_lnb > a').click(function (e){

			if($(this).hasClass('prev')){
				if(menuNum3 > 0){
					menuNum3 = menuNum3 -1;
					upDownFunc2(menuNum3)
				}

			}else if($(this).hasClass('next')){
				if(menuNum3 < slideNum3 -1){
					menuNum3 = menuNum3 +1;
					upDownFunc2(menuNum3)
				}
			}

			return false;
		});



		jQuery.nextFunc = function(){
            $('#player').remove();
            $('.mak').css('display','none');
            $('.skip_btn').css('display','none');
			$('.technology_wrap').css('opacity','0');
			//aNum = mc;
			//$('#slide1').html('');
            $('.technology_wrap').css('display','block');
            $('.technology_wrap').stop().animate({'opacity':'1'}, aniTime);
            bload2 = false;
            upDownFunc(menuNum2);
			
		}

		jQuery.nextFunc2 = function(){
			if(menuNum3 == 0){
				menuNum3 = 1;
				upDownFunc2(menuNum3);
			}
		}





		//---------------------------------스크롤 애니메이션-------------------------------------
		$(window).scroll(function(){
			var swh = $(window).outerHeight()/2;
			scrollTop = $(window).scrollTop();

			if(scrollTop>=$('#slide1').offset().top-swh/2 && scrollTop<$('#slide2').offset().top-swh){
                    			
				if(bload == false){
                     $('.technology_wrap li').addClass('on');
                     $('#slide1').addClass('on');
                    aNum = 0;

                    $('.technology_wrap').stop().animate({'opacity':'1'}, aniTime);
                    bload = true;

                    $('#snb_main').stop().animate({'opacity':'1'}, 1000, function(){

                        upDownFunc(menuNum2);


                        scrollFlag = false;
                    });
                    menuNum = 0;
                    $('#snb_area li').eq(menuNum).siblings().removeClass('on');
                    $('#snb_area li').eq(menuNum).addClass('on');
				 }

			}else{

				if(bload == true){
                    $('#slide1').removeClass('on');
					upDownFuncReset();
					$('.technology_wrap').stop().animate({'opacity':'0'}, aniTime);
					menuNum2 = 0;
					bload = false;
				}

			}
			if(scrollTop>=$('#slide2').offset().top-swh/2 && scrollTop<$('#slide3').offset().top-swh){

			 if(cload == false){

                 aNum = 0;
                    $('#slide2').addClass('on');

	 				$('.product_wrap').stop().animate({'opacity':'1'}, aniTime);
					cload = true;

					$('#snb_main').stop().animate({'opacity':'1'}, 1000, function(){
						upDownFunc2(menuNum3);
						scrollFlag = false;
					});


					menuNum = 1
					$('#snb_area li').eq(menuNum).siblings().removeClass('on');
 				 	$('#snb_area li').eq(menuNum).addClass('on');
			 }

			}else{

				if(cload == true){
                    $('#slide2').removeClass('on');
					upDownFuncReset2();
				//	stopVideoFunc(player5);
                    $('#player5').html('');
					$('.product_wrap').stop().animate({'opacity':'0'}, aniTime);
					menuNum3 = 0;
					cload = false;
				}
			}

			if(scrollTop>=$('#slide3').offset().top-swh/2){

				 if(dload == false){
                    $('#slide3').addClass('on');
                    jQuery.dNumFunc(1);
                    dload = true;
                    aNum = 1;
                    menuNum = 2
                    $('#snb_area li').eq(menuNum).siblings().removeClass('on');
                    $('#snb_area li').eq(menuNum).addClass('on');
                    $('#snb_main').stop().animate({'opacity':'1'}, 1000, function(){
                         scrollFlag = false;
                         $('body').css('overflow-y','auto');
                    }); 
				 }

			}else{

				if(dload == true){
                    $('.scroll_btn').css({'display':'none','opacity':'0'});
                    $('#slide3').removeClass('on');
					jQuery.dNumFunc(0);
					dload = false;
					setTimeout(function(){
						$('body').css('overflow-y','hidden');
					},1000);


				}

			}
		});
	}
    
    /* top버튼 클릭 */
     $('.top_wrap a').click(function(){
        updownfuncReset();
    });
    $('.skip_btn').click(function(){
        
        jQuery.nextFunc();
        
        
    });

    
    

	preloadimages('.product_06 li span');
    preloadimages('.product_btn a');

	/*이미지 지글거림 해결*/
	
	function preloadimages(id) {
		var c = new Array();
		$(id+' img').each( function(j) {
			c[j] = new Image();
			c[j].src = this.src;
			this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='"+ this.src +"')";
		});
	}
});
