import $ from 'jquery';


	$(".hamburger").click(function() {
		$(".mob-menu").slideToggle();
	});

	$(".hamburger").click(function() {
		$(".message").slideToggle(".message-up");
	});
	
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	   // Do something else, like open/close menu
	});


	$(function () {
    var tabContainers = $('.product__tabs > div'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('.product__tabs ul.tabNavigation a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('.product__tabs ul.tabNavigation a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
});