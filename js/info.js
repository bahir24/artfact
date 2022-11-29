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

/*------------------ Button to Top------------------*/

$(window).on( 'scroll', function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
});

/*------------------Preloader------------------*/
$(window).on( 'load', function(){
	$(".loader").delay(1000).fadeOut("slow");
});