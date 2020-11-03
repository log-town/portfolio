
$(function(){


	$('.btn_skip').click(function(){

		$('#intro').slideUp();

	});

	$('.btn_next').click(function(){
		
		$('#intro').slideUp();		
	});

	$('.btn_rs').click(function(){

		$('.btn_rs').fadeOut(500);
		$('.responsive_link').fadeIn();
	});

	var sw = true;

	$('.btn_prev').click(function(){

		if(sw==true){
			$('.btn_prev').addClass('on');
			sw=false;
			$('.responsive_link').fadeOut();
			$('.btn_rs').fadeIn();
		}else{
			$('.btn_prev').removeClass('on');
			$('.responsive_link').fadeOut();
			$('.btn_rs').fadeIn();
		}
	});

	$('.gnb li a').click(function(){

		var href=$(this).attr('href');
		var y=$(href).offset().top
		$('html,body').stop().animate({scrollTop:y},800);
	});

	$('.home').click(function(){
		$('#intro').slideDown();
	});


	$(window).scroll(function(){

		var yy=$(document).scrollTop();
		console.log(yy);

		if( yy>650 && yy<1470){
			$('.quick_btn_list li').stop().removeClass('on')
			$('.quick_btn_list li').stop().eq(0).addClass('on')
		}else if(yy>1690 && yy<2290){
			$('.quick_btn_list li').stop().removeClass('on')
			$('.quick_btn_list li').stop().eq(1).addClass('on')

		}else if(yy>2493 && yy<3200){
			$('.quick_btn_list li').stop().removeClass('on')
			$('.quick_btn_list li').stop().eq(2).addClass('on')

		}else if (yy>0 && yy<600){
			$('.quick_btn_list li').stop().removeClass('on')

		}
	});

	$('.quick_btn_list li a').click(function(){

		var href=$(this).attr('href');
		var yyy=$(href).offset().top
		$('html,body').stop().animate({scrollTop:yyy},800);
	});

	$('.contact_go').click(function(){

		$('.contact').show();
	});


	$('.btn_exit').click(function(){
		$('.contact').hide();
	});

});