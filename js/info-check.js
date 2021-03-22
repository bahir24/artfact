window.onload = function(){
    if(document.location.search){
        let infoParam = document.location.search.split('=').pop();
        let infoLinkId = '#pills-' + infoParam + '-tab';
        document.querySelector(infoLinkId).click();
    }
}

$('a[data-toggle="pill"]').on('shown.bs.tab', function(event){
    console.log(event.target);
    scrollToSection('post');
});