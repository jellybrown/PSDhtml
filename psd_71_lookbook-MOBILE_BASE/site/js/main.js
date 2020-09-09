$(function () {
    const $mainHeader = $('.main-header');
    const $searchBtn = $mainHeader.find('.search');
    const $form = $mainHeader.find('form');
    const pro = $('.products-list');

    const $footer = $('.products-list .panel-footer')
    $searchBtn.click(function () {
        $form.toggleClass('on');
    })


    $mainHeader.find('.toggle').click(function () {
        $('body').toggleClass('active')
    })

    $('.list-toggle a').click(function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        if ($(this).hasClass('list-btn')) {
            pro.addClass('list-view');
            $('main').addClass('list-view-style');
        } else {
            pro.removeClass('list-view');
            $('main').removeClass('list-view-style');
        }
    })




    pro.find('li').each(function () {
        const $target = $(this).find('.panel-footer');
        const title = $(this).find('h2');
        title.clone().prependTo($target);


    })

    $('.go-back').click(function () {
        history.go(-1);
    })



});