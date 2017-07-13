$(document).ready(function () {

    menu();

    abre();
    
    galeriaDetalhe();
     
    openMenu();

    $('input, textarea').placeholder();

    valida_form();

    mascaras();
});

function valida_form() {
    $("#contato, #onde, #frm-onde, #form-busca, #form-pesquisa, .form-validate").validationEngine(
        'attach', {
            promptPosition: "topLeft",
            scroll: false,
            autoHidePrompt: true,
            autoHideDelay: 2000
        }
    );
}

function abre() {
    $('.obra').click(function () {
        $('.login').show();
        $('.obra a').addClass('active');
    });
    $('main').click(function () {
        $('.login').hide();
         $('.obra a').removeClass('active');
    });
}

function formAvancarLog() {
    $('#login').hide();
    $('#esqueci_senha').show();
}

function formVoltarLog() {
    $('#esqueci_senha').hide();
    $('#login').show();
}

function menu() {
    $('.button-menu').click(function () {
        if ($('.topo').hasClass('open')) {
            $('.topo').removeClass('open');
        } else {
            $('.topo').addClass('open');
        }
    });

    $('.open-submenu').click(function(){
        if ($(window).width() < 990) {
            $(this).parent().addClass('submenu-opened');
        }
    });

    $('.close-submenu').click(function(){
        $(this).parent().removeClass('submenu-opened');
    });
}

function openMenu() {
    $('.button-menu').click(function () {
        if ($('.button-menu').hasClass('active')) {
            $('.button-menu').removeClass('active')
        } else {
            $('.button-menu').addClass('active')
        }
    });
}

function mascaras() {
    $("[mascara=numeros]").live("keyup", function () {
        $(this).val($(this).val().replace(/\D/g, ''));
    });
    $("[mascara=telefone],[mascara=TELEFONE]").live("focus", function () {
        $(this).mask('(99)9999-99999');
    });
    $("[mascara=cep],[mascara=CEP]").live("focus", function () {
        $(this).mask('99999-999');
    });
    $("[mascara=data]").live("focus", function () {
        $(this).mask('99/99/9999');
    });
    $("[mascara=data_parcial]").live("focus", function () {
        $(this).mask('99/9999');
    });

    $('input[name="CPF"]').mask('000.000.000-00', {reverse: true});
}


function load_cidades(estado, selCidade) {
    if (selCidade) {
        selCidade.html('<option value="">Selecione a cidade</option>');
    }

    if (estado && selCidade) {
        $.ajax({
            url: SITE_URL + LANG + '/contato/get_json_cidades',
            type: 'POST',
            dataType: 'json',
            data: {estado: estado},
            success: function (data) {
                if (typeof (data) == 'object') {
                    $.each(data, function (index, cidade) {
                        if (cidade.id == selCidade.attr('data-value')) {
                            selCidade.append('<option value="' + cidade.id + '" selected="selected">' + cidade.cidade + '</option>');
                        } else {
                            selCidade.append('<option value="' + cidade.id + '">' + cidade.cidade + '</option>');
                        }
                    });
                    selCidade.change();
                }
            }
        });

    }
}

function getAlert(msg) {

    if (msg == undefined) {
        msg = window.parent.$("#msgAviso").html();
    }

    setTimeout(function () {
        window.parent.$.blockUI({
            message: msg,
            fadeIn: 700,
            fadeOut: 700,
            timeout: 5000,
            css: {
                top: '15%',
                border: 'none',
                padding: '7px',
                backgroundColor: '#fff',
                opacity: 0.9,
                color: '#000'
            }
        });
    }, 700);
}


 function galeriaDetalhe() {
    var detalhe = $('.col-detail-image .detail-figure');
    $(document).on('click', '.col-thumb ul li', function(event) {
        event.preventDefault();
        
        
        $(this).each(function(index, el) {
            var g_index = parseInt($(this).index());
            detalhe.hide();
            detalhe.eq(g_index).fadeIn();
            
            var img_big = detalhe.eq(g_index).attr("data-img-big");
            detalhe.eq(g_index).zoom({
                url: img_big,
                touch: false
            });

        });
    });

    $('.col-thumb ul li').eq(0).trigger('click');


}
