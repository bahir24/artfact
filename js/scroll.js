function scrollToSection(target){
    if(event){
        event.preventDefault();
    }
    let topOffset = document.querySelector('#' + target).getBoundingClientRect().top;
    window.scrollBy({
        top: topOffset,
        behavior: 'smooth',
    });
}