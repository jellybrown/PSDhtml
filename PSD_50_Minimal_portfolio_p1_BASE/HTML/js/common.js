$(function () {
    $target = $('.request-field input, .request-field select, .request-field textarea');

    $target.click(function () {
        $target.parent().removeClass('active');
        $(this).parent().addClass('active');

    })

    /**/



    const $grid = $('.latest_portfolio').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });


    $('.portfolio-filters button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


})