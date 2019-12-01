var container = document.querySelector('#container');
var msnry = new Masonry( container, {
    // Настройки
    columnWidth: 200,
    itemSelector: '.item'
});

var $container = $('#container');
// Инициализация Масонри, после загрузки изображений
$container.imagesLoaded( function() {
    $container.masonry();
});