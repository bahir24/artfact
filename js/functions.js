"use strict";
$(window).on( 'load', function() {

	/*------------------ Hover Main Menu ------------------*/
	if($('.mnu>ul>li').hasClass('selected')){
		$('.selected').addClass('active');
		var currentleft=$('.selected').position().left+"px";
		var currentwidth=$('.selected').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	else{
		$('.mnu>ul>li').first().addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	$('.mnu>ul>li').on({
	 mouseenter: function(){
		$('.mnu ul li').removeClass('active');
		$(this).addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	},
	 mouseleave: function(){
		if($('.mnu>ul>li').hasClass('selected')){
			$('.selected').addClass('active');
			var currentleft=$('.selected').position().left+"px";
			var currentwidth=$('.selected').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
		else{
			$('.mnu>ul>li').first().addClass('active');
			var currentleft=$('.active').position().left+"px";
			var currentwidth=$('.active').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
	}});


	/*------------------ Mobile Main Menu ------------------*/
	$(".toggle-mnu").on( 'click', function(){
		$(this).toggleClass("on");
		$(".top_mnu").slideToggle();
		return false;
	});

	/*------------------ First Window Height Detected ------------------*/


	/*------------------ Animate WOW ------------------*/

	new WOW({
		animateClass: 'animate__animated',
	}).init();


	/*------------------ Scroll Menu------------------*/

	function scrollToSection(target){
		event.preventDefault();
		let topOffset = document.querySelector('#' + target).getBoundingClientRect().top;
		window.scrollBy({
			top: topOffset,
			behavior: 'smooth',
		});
	}


	/*------------------ Popup Window Effect------------------*/

	// $('.link').magnificPopup({
    //     type:'image',
    //     gallery:{enabled:true},
    //     zoom:{enabled: true, duration: 300}
    // });


	/*------------------ Button to Top------------------*/

	$(window).on( 'scroll', function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	// PORTFOLIO ISOTOPE
    var $container = $('.isotope_items');
    $container.isotope();

    $('.portfolio_filter ul li').on("click", function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });

});

/*------------------Preloader------------------*/
$(window).on( 'load', function(){


	$(".loader").delay(1000).fadeOut("slow");

});

/*------------------CountUp------------------*/

$('.counter').countUp({
  'time': 2000,
  'delay': 10
});
