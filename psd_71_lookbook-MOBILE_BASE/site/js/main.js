$(function () {
    const $mainHeader = $('.main-header');
    const $searchBtn = $mainHeader.find('.search');
    const $form = $mainHeader.find('form');


    $searchBtn.click(function () {
        $form.toggleClass('on');
    })
});