import { UsuarioService } from './../servico/usuario-service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario;
  msg : string='';
  msglista : string;
  usuarios : Usuario[]=[];

// 1
  constructor(private service : UsuarioService) {
    this.usuario = new Usuario();
   }
// 2
  ngOnInit() {
    // listagem
    this.listagem();

  }

  public cadastrarStorage(){

    this.service.create(this.usuario);
    this.msg='Gravado em Storage';
    console.log('Usuario', this.usuario);
    console.log('Mensagem', this.msg);
    this.usuario = new Usuario();

  }

  public cadastrarListagem(){
    this.service.createList(this.usuario);
    this.msglista="Dados gravados em lista";
  }

  public listagem(){
    return this.service.list();
  }

  visitaSiteCurso(){
    location.href='https://www.cotiinformatica.com.br';
  }

}
