jQuery(document).ready(function ($) {
    $('#evento').countdown(data, function (event) {
        $('#dias').html(event.strftime('%D dias'));
        $('#horas').html(event.strftime('%H horas'));
        $('#minutos').html(event.strftime('%M minutos'));
        $('#segundos').html(event.strftime('%S segundos'));
    });
})