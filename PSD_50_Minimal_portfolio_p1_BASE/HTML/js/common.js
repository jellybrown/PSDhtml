$(function () {
    $target = $('.request-field input, .request-field select, .request-field textarea');

    $target.click(function () {
        $target.parent().removeClass('active');
        $(this).parent().addClass('active');

    })

})