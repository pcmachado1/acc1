<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Queryes
 * Classe para definição de queryes. 
 * @author Paulo Machado
 */

class Queryes {
    private $query;
    
    function __construct() {
        
    }
    
    
    //select * from usuario join usuarioperfil on usuario.id = usuarioperfil.fk_usuario JOIN perfil on perfil.id = usuarioperfil.fk_perfil WHERE usuario.login='pcmachado' and usuario.senha='12345678';
    public function efetuarLogin(Usuario $usuario) {
        $this->query = "SELECT * FROM usuario WHERE "
                . "login ='".$usuario->getUsuario()."'"
                . " and senha='".$usuario->getSenha()."';";
        return $this->query;
    }
    public function atualizarPerfil(Usuario $usuario) {
        $this->query = "UPDATE usuario set nome = '".$usuario->getNome().
                        "' , sobrenome = '".$usuario->getSobrenome().
                        "' , email = '".$usuario->getEmail().
                        "' , login = '".$usuario->getLogin().
                        "' , senha = '".$usuario->getSenha().
                        "' where id = ".$usuario->getId()." ";
        return $this->query;
    }
    public function novoCadastro(Usuario $usuario) {
        $this->query = "INSERT INTO usuario (nome,sobrenome,email,login,senha) values ".
                    "('".$usuario->getNome().
                    "','".$usuario->getSobrenome().
                    "','".$usuario->getEmail().
                    "','".$usuario->getUsuario().
                    "','".$usuario->getSenha()."');";
        
        return $this->query;
    }
    public function getIdNewUser(Usuario $usuario){
        $this->query = "SELECT * FROM usuario where nome=".$usuario->getNome().
                " and sobrenome=".$usuario->getSobrenome().
                " and email=".$usuario->getEmail()." ;";
        
        
    }
    public function atualizarImagem(Usuario $usuario) {
        $this->query = "UPDATE usuario set image = '".$usuario->getImage().
                        "' where id = ".$usuario->getId()." ";
        return $this->query;
                           
    }
    public function listarUsuarios() {
       $this->query = "SELECT usuario.*,perfil.perfilnome FROM usuario JOIN usuarioperfil ON usuario.id = usuarioperfil.fk_usuario JOIN perfil ON perfil.id = usuarioperfil.fk_perfil";
       
       return $this->query;
    }
    public function desativarUsuario(Usuario $usuario) {
        $this->query = "UPDATE usuario set status = '".$usuario->getStatus()."' where id = ".$usuario->getId()."" ;
        
        return $this->query;
    }

}
