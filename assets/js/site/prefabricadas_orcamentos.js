$.ajaxSetup({ cache: false });
$(document).ready(function () {
    // $('.slct-cidade').wtSelect();

    $('#state').change(function () {
        load_cidades($(this).val(), $('#city'));
    });
});