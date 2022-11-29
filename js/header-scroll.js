var lastScroll = 0;
var scrollUp = 0;
var scrollDown = 0;
var headerSticky = document.querySelector('header');
var headerHeight = headerSticky.offsetHeight;
window.addEventListener('scroll', function () {
    var bodyOffset = document.querySelector('body').getBoundingClientRect().top;
    if (bodyOffset > lastScroll || bodyOffset > -2) {
        scrollDown = 0;
        scrollUp += bodyOffset - lastScroll;
        headerSticky.classList.remove('header-hidden');
        headerSticky.classList.add('header-show');
        lastScroll = bodyOffset;
    } else {
        scrollUp = 0;
        scrollDown += lastScroll - bodyOffset;
        headerSticky.classList.remove('header-show');
        headerSticky.classList.add('header-hidden');
        lastScroll = bodyOffset;
    }

});