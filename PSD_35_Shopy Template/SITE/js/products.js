$(function () {
    $(".price_range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function (event, ui) {
            $("#from").val(ui.values[0]);
            $("#to").val(ui.values[1])
        }
    });
    $("#from").val($(".price_range").slider("values", 0));
    $("#to").val($(".price_range").slider("values", 1));

})