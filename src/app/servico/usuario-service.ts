
import { Usuario } from './../usuario/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService{
    
    public static usuarios:Usuario[]=[];

    // gravando um usuario
    public create(usuario : Usuario){
        
        //storage (não grava objeto) storage (string) grava e sobrescreve
        localStorage.setItem('usuariofile', JSON.stringify(usuario));

    }
    // '... JSON' armazena tudo - listas ..
    public createList(usuario : Usuario){
        if (localStorage.getItem('usuariosfiles')){
            UsuarioService.usuarios.push
                (... JSON.parse(localStorage.getItem('')))
        }
        UsuarioService.usuarios.push(usuario);
        localStorage.setItem('usuariosfiles',
            JSON.stringify(UsuarioService.usuarios))
    }

    public list(){
        return JSON.parse(localStorage.getItem('usuariosfiles'));
    }

    
}