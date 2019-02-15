$(document).ready(function() {

// Анимация исчезновения кнопки "Начать демонстрацию" 

    $(".navbar-001").click(function() {
        $(".start").addClass("hidden");
    })

    $(".navbar-001").click(function() {
        $(".begin").removeClass("hidden");
    })

    $(".navbar-001").click(function() {
        $(".begin").addClass("visible");
    })
})