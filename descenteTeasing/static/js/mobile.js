

$(function(){
    $(window).load(function(){
        $('html,body').animate({scrollTop:40},100);
    })
    $('.visual p, .tit, .txt').addClass('on');
     
      $('header .menu_btn').click(function(){

         $('.sub_menu').css('display','block');
        $('body').css('overflow-y','hidden');

         return false;

     });
     $('header .close_btn').click(function(){

         $('.sub_menu').css('display','none');
         $('body').css('overflow-y','auto');
         return false;

     });
    $('.sub_menu').css('height',$(window).height());
     
     $("#touchSlider").touchSlider({
        roll : false,
		flexible : true,
		initComplete : function (e) {
			$("#touchSlider_paging").html("");
			var num = 1;
			$("#touchSlider > ul > li").each(function (i, el) {
				if((i+1) % e._view == 0) {
					$("#touchSlider_paging").append('<button type="button" class="btn_page"><span></span></button>');
				}
			});
			$("#touchSlider_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#touchSlider").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#touchSlider_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
            
		}
	});
     
    $('#touchSlider_paging').css('margin-left', -$('#touchSlider_paging').width() / 2);
    
     $("#touchSlider2").touchSlider({
        roll : false,
		flexible : true,
		initComplete : function (e) {
			$("#touchSlider_paging2").html("");
			var num = 1;
			$("#touchSlider2 > ul > li").each(function (i, el) {
				if((i+1) % e._view == 0) {
					$("#touchSlider_paging2").append('<button type="button" class="btn_page"><span></span></button>');
				}
			});
			$("#touchSlider_paging2 .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#touchSlider2").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#touchSlider_paging2 .btn_page").removeClass("on").eq(e.current-1).addClass("on");
            
            if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
                   // alert(navigator.userAgent)
            }else{
            
                if(e.current == 1){

                    $('#player').html("<iframe name='ifrMovie' id='ytPlayer' title='descent 영상' width='100%' src='http://www.youtube.com/embed/EpxPIBfaYQc?rel=0&showinfo=0&controls=1&vq=hd720&rel=0&iv_load_policy=3&autoplay=0' frameborder='0' allowfullscreen='true'></iframe>");
                }
                else if(e.current == 2){

                    $('#player').html('');

                }
            }

            
		}
	});
     
    $('#touchSlider_paging2').css('margin-left', -$('#touchSlider_paging2').width() / 2);
     
     
    $('.technology .main').css('position','absolute'); // 위에 딱붙이기
     
   
 
     
     $('.product_select li a').click(function(){
         var num = $(this).parent().index();
   
         $('.product_select').css({'background':'url(/static/images/m/select_btn_bg0'+(num+1)+'.png) no-repeat', 'background-size':'15.062em 3.625em', 'background-position': '-0.5em -0.5em'})
          $('.product_select li').removeClass('on');
          $(this).parent().addClass('on');
          $('.product .visual li').removeClass('on');
          $('.product .visual li').eq(num).addClass('on');
         //alert();
         return false;
         
     });
     
    
    

     
     
});


