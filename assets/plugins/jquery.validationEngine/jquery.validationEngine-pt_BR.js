(function($){
    $.fn.validationEngineLanguage = function(){};
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": {
                    "regex": "none",
                    "alertText": "* Este campo é obrigatório",
                    "alertTextCheckboxMultiple": "* Favor selecionar uma opção",
                    "alertTextCheckboxe": "* Este checkbox é obrigatório",
                    "alertTextDateRange": "* Ambas as datas do intervalo são obrigatórias"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Intervalo de datas inválido"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Intervalo de data e hora inválido"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Permitido o mínimo de ",
                    "alertText2": " caractere(s)"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Permitido o máximo de ",
                    "alertText2": " caractere(s)"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* Você deve preencher um dos seguintes campos"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Valor mínimo é "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Valor máximo é "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Data anterior a "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Data posterior a "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Máximo de ",
                    "alertText2": " opções permitidas"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Favor selecionar ",
                    "alertText2": " opção(ões)"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Os campos não correspondem"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Número de cartão de crédito inválido"
                },
                "phone": {
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Número de telefone inválido"
                },
                "email": {
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Endereço de email inválido"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Número inteiro inválido"
                },
                "number": {
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Número decimal inválido"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Data inválida, deve ser no formato AAAA-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Endereço IP inválido"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL inválida"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Apenas números"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Apenas letras"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Não são permitidos caracteres especiais"
                },
                "real": {
                	// Brazilian (Real - R$) money format
                	"regex": /^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(\,[\d]{0,2})?|[1-9]{1}[\d]{0,}(\,[\d]{0,2})?|0(\,[\d]{0,2})?|(\,[\d]{1,2})?)$/,
                    "alertText": "* Número decimal inválido"
                },
                "cpf_validation": {
                    "func": function(field, rules, i, options) {
                        var cpf = field.val()
                        cpf = cpf.replace(/[^\d]+/g, '');
                        var numeros, digitos, soma, i, resultado, digitos_iguais;
                        digitos_iguais = 1;
                        if (cpf.length < 11)
                            return false;
                        for (i = 0; i < cpf.length - 1; i++)
                            if (cpf.charAt(i) != cpf.charAt(i + 1))
                            {
                                digitos_iguais = 0;
                                break;
                            }
                        if (!digitos_iguais)
                        {
                            numeros = cpf.substring(0, 9);
                            digitos = cpf.substring(9);
                            soma = 0;
                            for (i = 10; i > 1; i--)
                                soma += numeros.charAt(10 - i) * i;
                            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                            if (resultado != digitos.charAt(0))
                                return false;
                            numeros = cpf.substring(0, 10);
                            soma = 0;
                            for (i = 11; i > 1; i--)
                                soma += numeros.charAt(11 - i) * i;
                            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                            if (resultado != digitos.charAt(1))
                                return false;
                            return true;
                        }
                        else
                            return false;
                    },
                    "alertText": "* CPF inválido"
                },
                "cnpj": {
                    "func": function(field, rules, i, options){                              
                        var cnpj = field.val();
                        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
                        var dig1= new Number;
                        var dig2= new Number;

                        var exp = /\.|\-|\//g
                        cnpj = cnpj.toString().replace( exp, "" ); 
                        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

                        for(i = 0; i<valida.length; i++){
                            dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                            dig2 += cnpj.charAt(i)*valida[i];       
                        }
                        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
                        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

                        if(((dig1*10)+dig2) != digito)  {
                            return false;
                        }
                        return true;

                    },
                    "alertText": "* CNPJ inválido"
                },
                "input_file_extension": { 
                //Deve ser alterado conforme projeto
                    "func": function(field, rules, i, options){                       
                        var ext = (field.val().split('.'))                        
                        if(ext[(ext.length-1)].toLowerCase() == 'jpg' || ext[(ext.length-1)].toLowerCase() == 'png'){
                            return true;
                        }else{
                            return false
                        }                        
                    },
                    "alertText": "* Selecione um arquivo do tipo .jpg ou .png"
                }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
