$(document).ready(function(){
    $('#txtUsuario').change(function(){
        var usuario = $('#txtUsuario').val();
        if(usuario == ""){
           $("#errorUser").html("Favor Preencher o Campo"); 
           console.log("Favor Preencher o Campo");
           event.preventDefault();
        }else{
           $("#errorUser").html(""); 
           console.log("Campo limpo");
        }
    });
    $('#txtSenha').change(function(){
        var senha = $('#txtSenha').val();
        if(senha== ""){
           $("#errorPass").html("Favor Preencher o Campo"); 
           console.log("Favor Preencher o Campo");
           event.preventDefault();
        }else{
           $("#errorPass").html(""); 
           console.log("Campo limpo");
        }
    });
    $('#btnLogin').click(function(){
        var usuario = $('#txtUsuario').val();
        var senha = $('#txtSenha').val();
        if(usuario == '' || senha == ''){
            if(usuario==''){
                $("#errorUser").html("Favor Preencher o Campo");
                console.log('erroUser');
                event.preventDefault();
            }
            if(senha==''){
                $("#errorPass").html("Favor Preencher o Campo");
                console.log('erroPass');
                event.preventDefault();
            }
        }else{
        
        $.post('../estudos1/controller/LoginController.php',
                {usuario:usuario,senha:senha},
                function(data){
                        console.log(data);
                        
                       if(data == 'true'){
                          console.log('usuario logado com sucesso');
                          location.assign('/estudos1/?page=welcome');
                       }else{
                          console.log('Nao foi possivel logar'); 
                          $('#errorLoggedOn').html('Usuario ou Senha Incorretos').show().fadeOut(10000);
                       }
                                }
                );
        }
    });
    $('#btnCadastro').click(function(){
        var objectCadastro = $('input');
        console.log("nome"+objectCadastro[0].value);
        console.log("sobrenome"+objectCadastro[1].value);
        console.log("email"+objectCadastro[2].value);
        console.log("login"+objectCadastro[3].value);
        console.log("senha"+objectCadastro[4].value);
        
        $.post('../estudos1/controller/CadastroController.php',
            {nome:objectCadastro[0].value,
             sobrenome:objectCadastro[1].value,
             email:objectCadastro[2].value,
             login:objectCadastro[3].value,
             senha:objectCadastro[4].value
            },function(data){
                console.log(data)
                }
            );
    });
    
    $('#txtEndereco').on("keyup", function() {
			    var value = $(this).val();
                            var key = "AIzaSyDvuiU-Vrf_qI7g0bJOsMh-2PWeBg7nufc";
                            console.log(value);
                            $.get('https://maps.googleapis.com/maps/api/geocode/json?',{address:value,key:key},function(data){
                                console.log(data);
                                console.log(data.results[0].geometry.location);
                                locationMap(data);
                            })
                        });
    
    
    
});
function loadWelcome(){
    $.post('../estudos1/controller/WelcomeController.php',{},function(data){
        //console.log("retorno: "+data);
        var jsonObject = JSON.parse(data);
        $('#welcome').html('Welcome Back '+jsonObject[0].nome+" "+jsonObject[0].sobrenome);
    });
}
function loadUsers(){
    $.post('../estudos1/controller/UsuariosController.php',{},function(data){
        var jsonObject = JSON.parse(data);
        for(i=0;i<jsonObject.length;i++){
            console.log(jsonObject[i].nome);
            $('#usersTable').append("<tr>"+
                                        "<td><img src=images/"+jsonObject[i].image+" class=\"img-thumbnail\" width=\"50px\" heigth=\"50px\" /></td>"+
                                        "<td>"+jsonObject[i].nome+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "<td>"+jsonObject[i].email+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "</tr>"
                    );
        }
    });
}
function locationMap(data){
    //var latLng = {lat:30,lng:30}
    // Create a new map that is immediately displayed on the web page
    var mapa = document.getElementById('map');
    var map = new google.maps.Map(mapa, {
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    navigationControl: true,
    navigationControlOptions: {
    position: google.maps.ControlPosition.LEFT,
    style: google.maps.NavigationControlStyle.ANDROID
    },
    scaleControl: true,
    streetViewControl: false,
    noClear: true,
    });
   
    map.setCenter(data.results[0].geometry.location);
    // Create the marker
    var marker = new google.maps.Marker({
    position: data.results[0].geometry.location
    });
    // And add it to a map
    //formatando endereco
    var enderecoFull = data.results[0].formatted_address.split('-');
    
    console.log(enderecoFull);
    //
    var enderecoTipo = data.results[0].types[0];
    
    switch (enderecoTipo) {
        
        case '':
            console.log('nao fazer nada');
            break;
        
        case 'street_address':
            console.log('endereco por endereco');
            break;
           
        case 'postal_code':
            console.log('endereco por cep');
            break;
            
        default:
            
            break;
    }
    
    // Create a new InfoWindow object that will be positioned at a specific location
    var infoWindow = new google.maps.InfoWindow({
    content:"<nav class=\"navbar navbar-inverse\" >Barra</nav>"+ 
            "<p>"+enderecoFull[0]+"</p>"+
            "<p>"+enderecoFull[1]+"</p>"+
            "<p>"+enderecoFull[2]+"</p>"+
            "<p>"+enderecoFull[3]+"</p>"+
            "<p>"+map.getCenter()+"</p>",
    position: data.results[0].geometry.location
    });
    // Add the infoWindow to the map
     //
    google.maps.event.addListener(infoWindow, 'domready', function() {

   // Referência ao DIV que recebe o conteúdo da infowindow recorrendo ao jQuery
   var iwOuter = $('.gm-style-iw');
   
   iwOuter.css({'background-color' : '#fff','border-radius':'7px','top':'15px','height':'400px'});
   
   /* Uma vez que o div pretendido está numa posição anterior ao div .gm-style-iw.
    * Recorremos ao jQuery e criamos uma variável iwBackground,
    * e aproveitamos a referência já existente do .gm-style-iw para obter o div anterior com .prev().
    */
   var iwBackground = iwOuter.prev();

   // Remover o div da sombra do fundo
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

   // Remover o div de fundo branco
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});
   
   var iwCloseBtn = iwOuter.next();
   
   iwCloseBtn.css({'right':'20px','top':'20px'});
   
   iwOuter.parent().parent().css({'left': '130px'});
   
   // Desloca a sombra da seta a 76px da margem esquerda 
iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

// Desloca a seta a 76px da margem esquerda 
iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    });
    //
    
    
    
    
    //marker.setMap(map);
    
    infoWindow.open(map);

    
    console.log(infoWindow);
}

