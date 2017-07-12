<?php
        session_start();
       //mail('paulo_chm@hotmail.com', 'teste', "testess");
    switch ($_GET['page']) 
    {
        case '':
            
            include 'view/header.html';
            include 'view/login.html';
            include 'view/footer.html';
            
        break;
    
        case 'login':
            
            include 'view/header.html';
            include 'view/login.html';
            include 'view/footer.html';
            
        break;
        case 'welcome':
           
            if($_SESSION['userSession']=='NULL' || $_SESSION['userSession']==''){
               include 'view/header.html';
                include 'view/login.html';
                include 'view/footer.html';
           }else{
                include 'view/header.html';
                include 'view/welcome.html';
                include 'view/footer.html';
           }
            
        break;
    
        case 'exit':
            $_SESSION['userSession']='';
            $_GET['page'] = '';
            include 'view/header.html';
            include 'view/login.html';
            include 'view/footer.html';
            
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
