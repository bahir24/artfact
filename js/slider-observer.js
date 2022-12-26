if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', animateFirstSlideText);
  document.addEventListener('DOMContentLoaded', animateContactHeader);
} else {


  // DOM готов!
  animateContactHeader();
  animateFirstSlideText();
}
$('#heroSlider').on('click', function (e) {
  $('#heroSlider').carousel('next');
});

function animateFirstSlideText(){
  let firstSlide = document.querySelectorAll('.carousel-item ')[0];
  let firstSlideText = firstSlide.querySelectorAll('.content_lines p');
  firstSlideText.forEach(element => {
    setTimeout(addAnimateClass, 1000, element, 'animate__animated');
  });
}

function animateContactHeader(){
  let contactHeaderItems = document.querySelectorAll('.contact-header .animate__fadeInUp');
  contactHeaderItems.forEach(element => {
    addAnimateClass(element, 'animate__animated');
  });
}

$('#heroSlider').on('slid.bs.carousel', function (e) {
  let slides = this.querySelectorAll('.carousel-item');
  let oldContentBlock = slides[e.from].querySelectorAll('.content_lines p');
  let activeContentBlock = e.relatedTarget.querySelectorAll('.content_lines p');
    oldContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__animated');
    });
    activeContentBlock.forEach(element => {
      addAnimateClass(element, 'animate__animated');
    });
});

function addAnimateClass(paragraph, animateClass){
  paragraph.classList.toggle(animateClass);
}
