<?php

session_start();
include '../config.php';

$usuario = new Usuario();
$usuario->setNome($_POST['nome']);
$usuario->setSobrenome($_POST['sobrenome']);
$usuario->setEmail($_POST['email']);
$usuario->setUsuario($_POST['login']);
$usuario->setSenha($_POST['senha']);

$conexao = new ConectionFactory();

$query = new Queryes();
//var_dump($usuario);

echo $query->novoCadastro($usuario);

$result = $conexao->getConectionRemote()->query($query->novoCadastro($usuario));

$result->fetchAll();