ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.9155, 30.3096],
        zoom: 16,
        controls: [],
    }, {
        searchControlProvider: 'yandex#search'
    }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Офис компании ООО "АртФакт"',
            balloonContent: 'БЦ Измацловский, офис 352.<br/>Вход со стороны Советского проспекта',
        }, {
            iconImageSize: [80, 80],
        });

    myMap.geoObjects
        .add(myPlacemark)
});