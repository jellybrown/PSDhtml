$(function () {
    toggle = $('.toggle');
    menu = $('.menu');
    toggle.click(function () {
        menu.slideToggle();
    })


    $(window).resize(function () {
        if ($(this).whidth() > 768) {
            menu.show();
        } else {
            menu.hide();
        }
    })

});