$.ajaxSetup({ cache: false });
$(document).ready(function () {
    $('.slct-cidade').wtSelect();
    $(".nume").wtRadioButton();
    $("#conteudo-nossa-casa").attr('data-page', '1');
    get_nossas_casas();
    get_perguntas();
});

function get_nossas_casas() {
    var obj_content = $('#conteudo-nossa-casa');
    var pagina = parseInt(obj_content.attr('data-page'));
    if (pagina) {
        $.ajax({
            url: SITE_URL + LANG + '/nossas_casas/get_casas',
            type: 'POST',
            data: {
                pagina: pagina
            },
            dataType: 'JSON',
            success: function (obj_json) {
                if (obj_json.html !== "") {
                    obj_content.append(obj_json.html);
                    obj_content.attr('data-page', obj_json.proxima_pagina);
                    get_nossa_galeria(obj_content.find('a').attr('data-id'));
                }
                if (obj_json.is_proximo === false) {
                    $('#carregar-mais').hide();
                }
            }
        });
    }
}

function get_perguntas() {
    $.ajax({
        url: SITE_URL + LANG + '/nossas_casas/get_perguntas',
        dataType: 'JSON',
        success: function (obj_json) {
            if (obj_json.html !== "") {
                $('#bx-perguntas').html(obj_json.html);
                $(".nume").wtRadioButton();
                send_pergunta();
                if (obj_json.dados_pessoais) {
                    $('.slct-cidade').wtSelect();
                    change_estado();
                    valida_form();
                    send_formulario();
                }
                if (obj_json.dados_descricao) {
                    send_formulario_descricao();
                }
            }
        }
    });
}

function send_pergunta() {
    $('input[type="radio"]').click(function () {
        var vl = $(this).val();
        if (vl !== "") {
            $.ajax({
                url: SITE_URL + LANG + '/nossas_casas/send_pergunta',
                type: 'POST',
                data: {
                    resposta: vl
                },
                dataType: 'JSON',
                success: function (obj_json) {
                    if (obj_json.status !== false) {
                        get_perguntas();
                    }
                }
            });
        }
    });
}

function change_estado() {
    $('#selectEstado').change(function () {
        load_cidades($(this).val(), $('#selectCidade'));
    });
}

function send_formulario() {
    $('#frm-onde').live('submit', function (event) {
        var form = $(this);
        $.ajax({
            url: SITE_URL + LANG + '/nossas_casas/send_formulario',
            type: 'POST',
            data: form.serialize(),
            dataType: 'JSON',
            success: function (obj_json) {
                if (obj_json.status === true) {
                    $('#frm-onde').hide();
                    $('#contato-enviado').show();
                } else {
                    if (obj_json.erro) {
                        var html = "";
                        if (obj_json.erro.ESTADO) {
                            html += "<p class='lembre'>" + obj_json.erro.ESTADO + "</p>";
                        }
                        if (obj_json.erro.CIDADE) {
                            html += "<p class='lembre'>" + obj_json.erro.CIDADE + "</p>";
                        }
                        if (obj_json.erro.NOME) {
                            html += "<p class='lembre'>" + obj_json.erro.NOME + "</p>";
                        }
                        if (obj_json.erro.EMAIL) {
                            html += "<p class='lembre'>" + obj_json.erro.EMAIL + "</p>";
                        }
                        if (obj_json.erro.TELEFONE) {
                            html += "<p class='lembre'>" + obj_json.erro.TELEFONE + "</p>";
                        }

                        getAlert(html);
                    }
                }
            }
        });
        return false;
    });
    return false;
}

function send_formulario_descricao() {
    $('#frm-descricao').live('submit', function (event) {
        var form = $(this);
        $.ajax({
            url: SITE_URL + LANG + '/nossas_casas/send_formulario_descricao',
            type: 'POST',
            data: form.serialize(),
            dataType: 'JSON',
            success: function (obj_json) {
                if (obj_json.status === true) {
                    $('#cnt-frm-descricao').hide();
                    get_perguntas();
                } else {
                    if (obj_json.erro) {
                        var html = "";
                        if (obj_json.erro.OBSERVACAO) {
                            html += "<p class='lembre'>" + obj_json.erro.OBSERVACAO + "</p>";
                        }
                        getAlert(html);
                    }
                }
            }
        });
        return false;
    });
    return false;
}