<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include '../config.php';

$query = new Queryes();
$conexao = new ConectionFactory();

$result = $conexao->getConectionRemote()->query($query->listarUsuarios());
echo json_encode($result->fetchAll());

