var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.939391, 30.323047],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Мишка',
            balloonContent: 'Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/svg/icon-map-pin.svg',
            // Размеры метки.
            iconImageSize: [66, 101],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-33, -101]
        }),

    myMap.geoObjects
        .add(myPlacemark);

}
