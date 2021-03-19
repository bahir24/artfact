window.onload = function(){
  let firstSlide = document.querySelectorAll('.carousel-item')[0];
  let firstSlideText = firstSlide.querySelectorAll('.content_lines p');
  firstSlideText.forEach(element => {
    setTimeout(addAnimateClass, 1000, element, 'animate__fadeInLeft');
    console.log(element);
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




console.log();
// content_lines
// do something…
// setTimeout(paragraph.classList.toggle(animateClass), 1000);
 // paragraph.classList.toggle('animated');
  // paragraph.classList.toggle(animateClass);
// function animateContent(slide){
//   if(slide.classlist.contain('active')){

//   } else {

//   }

// }

// $('#heroSlider').on('slide.bs.carousel', function (e) {
//   let oldContentBlock = e.relatedTarget.querySelectorAll('.content_lines p');
//   stairsDelay(oldContentBlock);
//   // let contentBlock = e.relatedTarget.querySelectorAll('.content_lines p');
//   // stairsDelay(contentBlock);

//   console.log();
//   // content_lines
//   // do something…
// });

// var observeObject = function () {
//     var _class = {
//       init: function (selector, callback) {
//         var elements = document.querySelectorAll(selector);
//         // console.log(elements);
//         try {
//             var observer = new MutationObserver(function (mutations) {
//                 mutations.forEach(function (mutation) {
//                   callback(mutation.target);
//                 });
//               });
//             elements.forEach(element => {
//                 observer.observe(element, {
//                     attributes: true,
//                     // subtree: true,
//                     // attributeOldValue: true
//                 });
//                 // console.log(element);
//             });

//         } catch (z) {
//           element.addEventListener('DOMAttrModified', function (e) {
//             callback(e.target);
//           }, false);
//         }
//       }
//     };

//     return _class;
//   }();





  /* А тут инициализируем отслеживание в элементе, передавая селектор */

//   function onloadAnimate(){

//   };

// setTimeout(onloadAnimate, 500);
 /* ссылка на Node, имя атрибута, предыдущее значение */
    //   console.log(target);
// $('#heroSlider').on('slide.bs.carousel', function (slide) {
//     console.log(slide.target);
//   })
// function onloadAnimate(){
//     observeObject.init('.carousel-item', function (target) {
//         if(target.classList.contains('active')){
//             $(target).find('.hello').addClass('animated zoomIn');
//             $(target).find('.name').addClass('animated zoomIn');
//             $(target).find('.content_prof').find('p').addClass('animated zoomIn');
//         } else {
//             $(target).find('.hello').removeClass('animated zoomIn');
//             $(target).find('.name').removeClass('animated zoomIn');
//             $(target).find('.content_prof').find('p').removeClass('animated zoomIn');

//         }

//     });
//     // let firstSlide = [...document.querySelectorAll('.carousel-item.active')];
//     // $(firstSlide).find('.hello').addClass('animated zoomIn');
//     // $(firstSlide).find('.name').addClass('animated zoomIn');
//     // $(firstSlide).find('.content_prof').find('p').addClass('animated zoomIn');
//     // $(firstSlide).find('.content_download').find('p').addClass('animated zoomIn');

// }
// setTimeout(onloadAnimate, 2000);
// $(window).on( 'load', function(){



// });

// let firstSlide = [...document.querySelectorAll('.carousel-item.active')];
//     $(firstSlide).find('.hello').addClass('animated zoomIn');
//     $(firstSlide).find('.name').addClass('animated zoomIn');
//     $(firstSlide).find('.content_prof').find('p').addClass('animated zoomIn');
//     $(firstSlide).find('.content_download').find('p').addClass('animated zoomIn');
    // let firstSlide = [...document.querySelectorAll('.carousel-item.active')];
    // $(firstSlide).find('.hello').removeClass('animated zoomIn');
    //         $(firstSlide).find('.name').removeClass('animated zoomIn');
    //         $(firstSlide).find('.content_prof').find('p').removeClass('animated zoomIn');
    //         $(firstSlide).find('.content_download').find('p').removeClass('animated zoomIn');
// function onloadAnimate(){
//     // console.log([...document.querySelectorAll('.carousel-item.active')]);
//     let firstSlide = [...document.querySelectorAll('.carousel-item.active')];
//     $(firstSlide).find('.hello').addClass('animated zoomIn');
//             $(firstSlide).find('.name').addClass('animated zoomIn');
//             $(firstSlide).find('.content_prof').find('p').addClass('animated zoomIn');
//             $(firstSlide).find('.content_download').find('p').addClass('animated zoomIn');

// }



// });
            // console.log(target);
            // $(target).find(".content_name .hello").addClass('animated zoomIn');
// $(".content_name .hello").addClass('animated zoomIn');
	// $(".content_name .name").addClass('animated zoomIn');
	// $(".content_prof p").addClass('animated zoomIn');
	// $(".content_download p").addClass('animated zoomIn');
// var observeObject = function () {
//     var _class = {
//       init: function (selector, callback) {
//         //   var elements = document.querySelectorAll(selector);
//         // var elements = document.querySelectorAll(selector);
//         var element = document.querySelector(selector);
//         console.log(element);
//         // if(elements){
//             // elements.forEach(element => {
//                 try {
//                     var observer = new MutationObserver(function (mutations) {
//                         mutations.forEach(function (mutation) {
//                           callback(mutation.target, mutation.attributeName, mutation.oldValue);
//                         });
//                       });

//                     observer.observe(element, {
//                       attributes: true,
//                     //   subtree: true,
//                       attributeOldValue: true
//                     });
//                 } catch (z) {
//                     element.addEventListener('DOMAttrModified', function (e) {
//                       callback(e.target, e.attrName, e.prevValue);
//                     }, false);
//                   }
//             // });
//         // }
//       }
//     };

//     return _class;
//   }();

//   /* А тут инициализируем отслеживание в элементе, передавая селектор */
//   $(function () {
//     observeObject.init('.carousel-item', function (target, name, oldValue) {
//       /* ссылка на Node, имя атрибута, предыдущее значение */
//     //   console.log(name);
//     if(oldValue){
//         console.log(oldValue);
//     }
//     //   console.log(target, name, oldValue);
//     });
//   });