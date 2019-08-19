ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [53.906740, 27.585681],
        zoom: 14,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([53.906740, 27.585681], {
        hintContent: 'г. Минск, ул. Марьевская, 7 комн.4',
        balloonContent: '<div class="map__hint">ООО "Фэлькон Спедишн" 220034, Республики Беларусь, г. Минск, ул. Марьевская, 7 комн.4 tel.: +375 29 609-77-74</div>'
    // {
    //     iconLayout: 'default#image', 
    //     iconImageHref: '',
    //     iconImageSize: '',
    //     iconImageOffset [],
    // }
    });

    map.geoObjects.add(placemark);
    map.behaviors.disable('multiTouch');
};