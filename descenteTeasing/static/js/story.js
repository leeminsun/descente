$(window).load(function(){
    

	var start;
	var dNum = 0; //테스트시에는 변경
 	var slideTop = 0;
	var num = 0;
	var deltaNum;

	motionSet();
	function motionSet()
	{
        $('.scroll_btn').css('opacity','0');
		$btnLeft = $("#btnLeft");
		$btnRight = $("#btnRight");
		$leftCont = $(".story_img01 #leftCont .obj");
		$rightCont = $(".story_img01 #rightCont .obj");
//		 $("#leftCont .obj").css({"right":"100%"});
//		 $("#rightCont .obj").css({"left":"100%"});
		start = 305;
		
	}

	/* 외부 함수 호출로  aNum값 변경 */
	jQuery.dNumFunc = function(mc){ // 스토리 슬라이드 활성화 관련 변수

		dNum = mc;

	};
	jQuery.dNumTopFunc = function(top){ // 현재 슬라이드3의 Top값 가져옴

		slideTop = top;

	};

	jQuery.deltaFunc = function(ddNum){ // 스크롤 위아래 구분 변수

		deltaNum = ddNum;
		//console.log(ddNum);
	};

function zindexFunc(){
     $("iframe").each(function() {
            var ifr_source = $(this).attr('src');
            var wmode = "wmode=transparent";
                if(ifr_source.indexOf('?') != -1) {
                    var getQString = ifr_source.split('?');
                    var oldString = getQString[1];
                    var newString = getQString[0];
                    $(this).attr('src',newString+'?'+wmode+'&'+oldString);
                }
                else $(this).attr('src',ifr_source+'?'+wmode);
    });

}
 
    
var cha;

$(window).scroll(function()
	{
		if(dNum == 1){
				onScorll();
		}
	});

	function onScorll()
	{
		var sct = $(this).scrollTop();

		cha = sct - start;
		//console.log(cha-slideTop)

			if ( cha-slideTop == -305) // 영상
			{
                $('.scroll_btn').css('display','block');
                $('.scroll_btn').stop().animate({"opacity":"1"}, 500, 'easeInOutCubic');
//				$("#leftCont .obj").stop().animate({'right':'100%'}, 500, 'easeInOutCubic');
//				$("#rightCont .obj").stop().animate({'left':'100%'}, 500, 'easeInOutCubic');
                $('#player2 iframe').remove();
				$('#player3 iframe').remove();
				$('#player4 iframe').remove();
                $('.player_bg').css('z-index','0');
                $('.obj').removeClass('on');
                if(num == 0){
						$('#player2').html("<iframe name='ifrMovie' title='descent 영상' style='z-index:0' width='90%' height='960' src='http://www.youtube.com/embed/SiFriV1nmqY?rel=0&showinfo=0&controls=0&vq=hd720&version=3&rel=0&iv_load_policy=3&autoplay=1&loop=1' frameborder='0' allowfullscreen='true'></iframe>");
				
					}else if(num == 1){
						$('#player3').html("<iframe name='ifrMovie' title='descent 영상' style='z-index:0' width='90%' height='960' src='http://www.youtube.com/embed/GJ8-gvvL61I?rel=0&showinfo=0&controls=0&vq=hd720&version=3&rel=0&iv_load_policy=3&autoplay=1&loop=1' frameborder='0' allowfullscreen='true'></iframe>");
				
					}else if(num == 2){
						$('#player4').html("<iframe name='ifrMovie' title='descent 영상' style='z-index:0' width='90%' height='960' src='http://www.youtube.com/embed/bdw714tiRCA?rel=0&showinfo=0&controls=0&vq=hd720&version=3&rel=0&iv_load_policy=3&autoplay=1&loop=1' frameborder='0' allowfullscreen='true'></iframe>");
					}
                setTimeout(function(){
                    $('.player_bg').css('z-index','-1');
                },500);
                zindexFunc();   

			}
			else // 영상 벗어나면
			{
				$('#player2 iframe').remove();
				$('#player3 iframe').remove();
				$('#player4 iframe').remove();
                $('.player_bg').css('z-index','0');
                
			}
            if( cha-slideTop > 1900) // 영상 벗어나면
            {
                $('.scroll_btn').stop().animate({"opacity":"0"}, 500, 'easeInOutCubic', function(){
                     $('.scroll_btn').css('display','none');
                });
            }else{
                $('.scroll_btn').css('display','block');
                $('.scroll_btn').stop().animate({"opacity":"1"}, 500, 'easeInOutCubic');
            }



			$leftCont.each(function(index, element)
			 {
			 	var objStart = $(this).offset().top;
                    
					if(deltaNum < 0){ //아래로
						if(sct  + start > objStart){
							//$(this).stop().animate({'right':'0px',"opacity":"1"}, 500, 'easeInOutCubic');
                            $(this).addClass('on');
						}
                        
					}else if(deltaNum > 0){
						if(sct  + start < objStart){
							//$(this).stop().animate({'right':'100%',"opacity":"0"}, 500, 'easeInOutCubic');
                            $(this).removeClass('on');        
						}
                       

					}

			 });
			 $rightCont.each(function(index, element)
 			 {
 			 	var objStart = $(this).offset().top ;
                
				if(deltaNum < 0){ //아래로
	 				if(sct  + start > objStart){
	 					//$(this).stop().animate({'left':'1px',"opacity":"1"}, 500, 'easeInOutCubic');
                        $(this).addClass('on');
	 				}
                    
				}else if(deltaNum > 0){
                    if(sct  + start < objStart){
					    //$(this).stop().animate({'left':'100%',"opacity":"0"}, 500, 'easeInOutCubic');
                        $(this).removeClass('on');
				    }
                    

				}

 			 });

	}//onScorll

	var blurNum = false;

	//$('.story_mov li a, .story_link li a').click(function(){ // 스토리3 영상 변경 클릭 함수
     $(document).on("click",".story_mov li a, .story_link li a",function(){   
		if(blurNum == false){
            var $thisParent = $(this).parent();
			$('.story_mov li').removeClass('on'+(num+1));
            if($thisParent.hasClass('story_mov01') || $thisParent.hasClass('story_link01')){
                num = 0;
            }else if($thisParent.hasClass('story_mov02') || $thisParent.hasClass('story_link02')){
                num = 1;
            }else if($thisParent.hasClass('story_mov03') || $thisParent.hasClass('story_link03')){
                num = 2;
            }
			//num = $(this).parent().index();
			$('.story_mov li').addClass('on'+(num+1));
			$('.story_mov li').addClass('blur');
			blurNum = true;
            
            $('#slide3').removeClass('bg01');
            $('#slide3').removeClass('bg02');
            $('#slide3').removeClass('bg03');
            $('.story_link li').removeClass('on');
             
			if(num == 0){
				$('.story_link').prepend($('.story_link01'));
                $('.story_link li').eq(num).siblings().addClass('on');
				$('.story_img01').css('display','block');
				$('.story_img02').css('display','none');
				$('.story_img03').css('display','none');
				$leftCont = $(".story_img01 #leftCont .obj");
				$rightCont = $(".story_img01 #rightCont .obj");
                $('#slide3').addClass('bg01');
               $('.story_link03 .btn').html('<img src="/static/images/product_sum03_2.jpg" alt="paper wings 영상 바로보기">');
			}else if(num == 1){
                $('.story_link li').eq(num).siblings().addClass('on');
				$('.story_link').append($('.story_link01'));
                $('.story_link03 .btn').html('<img src="/static/images/product_sum03.jpg" alt="paper wings 영상 바로보기">');
				$('.story_img01').css('display','none');
				$('.story_img02').css('display','block');
				$('.story_img03').css('display','none');
				$leftCont = $(".story_img02 #leftCont .obj");
				$rightCont = $(".story_img02 #rightCont .obj");
                
                $('#slide3').addClass('bg02');
                
               
                
			}else if(num == 2){
				$('.story_link').prepend($('.story_link01'));
                $('.story_link li').eq(num).siblings().addClass('on');
				$('.story_img01').css('display','none');
				$('.story_img02').css('display','none');
				$('.story_img03').css('display','block');
				$leftCont = $(".story_img03 #leftCont .obj");
				$rightCont = $(".story_img03 #rightCont .obj");
                 $('#slide3').addClass('bg03');
			}
           
		}
        onScorll();
        

		setTimeout(function(){
			blurNum = false;
			$('.story_mov li').removeClass('blur');
		},300);


		
	});
    
    /* scroll_btn 클릭 */
    $('.scroll_btn').click(function(){
       
        if(cha-slideTop == -305)
        {
            scrollFlag = true
            $('html,body').animate({
                scrollTop: $('#slide3').offset().top + 960
            }, 1000, 'easeInOutExpo', function(){
                scrollFlag = false;
            });
            deltaNum = -1;
            onScorll();
        }else{
            return false;
        }
           
      
        
    });
    
   
});
