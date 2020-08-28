$(function () {
    const $searchBtn = $('.shopping_nav .search_btn');
    const $form = $('header form')

    $searchBtn.click(function (e) {
        e.preventDefault();
        $form.toggleClass('active');
    })

    $('.bx_slide').bxSlider({
        controls: false,
        mode: 'vertical',
        auto: true,
        pause: 2500,
    });

})