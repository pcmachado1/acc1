<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();
include '../config.php';

$usuario = new Usuario();
$usuario->setUsuario($_POST['usuario']);
$usuario->setSenha($_POST['senha']);

$conexao = new ConectionFactory();

$query = new Queryes();
$query->efetuarLogin($usuario);






try {
   $result = $conexao->getConectionRemote()->
   query($query->efetuarLogin($usuario));
   
   $numRows = $result->rowCount();
    
   if($numRows > 0){
       $_SESSION['userSession'] = $result->fetchAll(); 
       echo 'true';
   }else{
       echo 'false';
   }
   
} catch (PDOException $exc) {
    echo "Erro na conexao ".$exc->getMessage();
}



        

