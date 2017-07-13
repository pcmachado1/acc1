<?php
        session_start();
       //mail('paulo_chm@hotmail.com', 'teste', "testess");
    switch ($_GET['page']) 
    {
        case '':
            
            //include 'view/header.html';
            include 'view/home.html';
            //include 'view/footer.html';
            
        break;
    
        case 'diferenciais':
            
            include 'view/header.html';
            include 'view/diferenciais.html';
            //include 'view/footer.html';
            
        break;
        case 'empresa':
           
            include 'view/header.html';
            include 'view/empresa.html';
            
        break;
    
        case 'contato':
            
            include 'view/header.html';
            include 'view/contato.html';
            
        break;
    
        case 'location':
            
            include 'view/header.html';
            include 'view/location.html';
            include 'view/footer.html';
            
        break;
        
        case 'usuarios':
           
           if($_SESSION['userSession']=='NULL' || $_SESSION['userSession']==''){
               include 'view/header.html';
                include 'view/login.html';
                include 'view/footer.html';
           }else{
                include 'view/header.html';
                include 'view/usuarios.html';
                include 'view/footer.html';
           }
            
            
        break;

        default:
            
        break;
    }
        
    
        
        
            
?>
