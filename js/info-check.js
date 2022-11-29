window.onload = function(){
    if(currentGetParam){
        let infoParam = '#' + currentGetParam + '-tab';
        document.querySelector(infoParam).click();
    } else {
        let firstTabName = document.querySelectorAll('a[data-toggle="pill"]')[0].id.slice(0,-4);
        let firstTab = document.querySelector('#dizayn-proekty');
        let activeTabHead = firstTab.querySelector('h2').textContent;
        let activeTabDescription = firstTab.querySelector('.content p:first-child').textContent;
        let firstSentence = activeTabDescription.split('.')[0].replace(/\s{2}/g, '').replace(/[\r\n]+/g, '') + '.';
        history.pushState('null', 'null', 'info/dizayn-proekty');
        $('meta[name=description]').attr('content', firstSentence);
        $('meta[name=title]').attr('content', activeTabHead);
        $('title').text(activeTabHead);
    }
}

$('a[data-toggle="pill"]').on('shown.bs.tab', function(event){
    scrollToSection('post');
    let tabName = event.target.id.slice(0,-4);
    let activeTab = $('#' + tabName)[0];
    let activeTabHead = $('#' + tabName)[0].querySelector('h2').textContent;
    let activeTabDescription = $('#' + tabName)[0].querySelector('.content p:first-child').textContent;
    let firstSentence = activeTabDescription.split('.')[0].replace(/\s{2}/g, '').replace(/[\r\n]+/g, '') + '.';

    history.pushState(null, null, tabName);
    $('meta[name=description]').attr('content', firstSentence);
    $('meta[name=title]').attr('content', activeTabHead);
    $('title').text(activeTabHead);
});