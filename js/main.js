

$(document).ready(function(){
	
	//Smooth Scrolling for links
	$('a').click(function(){
		const scroll =$(this).attr('href');
		$('body').animate({scrollTop:$(scroll).offset().top}, 600)
	})

	$('.hamburger-nav').click(function(){
		$(this).hide();
		$('.open').show(1000);

	})
	$('.close').click(function(){
		$(this).hide();
		$(this).show();
		$('.open').hide(1000);
		$('.hamburger-nav').show();
	})
	
	


})