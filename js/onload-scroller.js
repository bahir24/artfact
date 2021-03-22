window.onload = function(){
    if(document.location.search){
        event.preventDefault();
        let infoParam = document.location.search.split('=').pop();
        scrollToSection(infoParam);
    }
}