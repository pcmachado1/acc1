$(document).ready(function () {
    
    valida_form();

});
function valida_form() {
    $("#form-busca").validationEngine(
            'attach', {
                promptPosition: "topLeft",
                scroll: false,
                autoHidePrompt: true,
                autoHideDelay: 2000
            }
    );
}


$(document).ready(function() {
	$('.js-col-galerry').slick({
		dots: true,
		arrows: false,
		fade: true,
        infinite: true
	});
});