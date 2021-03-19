window.onload = function(){
  let firstSlide = document.querySelectorAll('.carousel-item')[0];
  let firstSlideText = firstSlide.querySelectorAll('.content_lines p');
  firstSlideText.forEach(element => {
    setTimeout(addAnimateClass, 1000, element, 'animate__fadeInLeft');
  });
  let contactHeaderItems = document.querySelectorAll('.contact-header .animate__fadeInUp');
  contactHeaderItems.forEach(element => {
    addAnimateClass(element, 'animate__animated');
  });
}
$('#heroSlider').on('click', function (e) {
  $('#heroSlider').carousel('next');
})

$('#heroSlider').on('slid.bs.carousel', function (e) {
  let slides = this.querySelectorAll('.carousel-item');
  let oldContentBlock = slides[e.from].querySelectorAll('.content_lines p');
  let activeContentBlock = e.relatedTarget.querySelectorAll('.content_lines p');
  if(e.from % 2){
    oldContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__fadeInRight');
    });
    activeContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__fadeInLeft');
    });
  } else {
    oldContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__fadeInLeft');
    });
    activeContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__fadeInRight');
    });
  }
});

function addAnimateClass(paragraph, animateClass){
  paragraph.classList.toggle(animateClass);
}
