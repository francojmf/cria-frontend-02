import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  public usuarios;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController)  {
    this.usuarios= [
      {id:1, email:'unifesp@unifesp.gov.br', nome:'UNIFESP SJC', logradouro:'Rua Talim', numero:'330', complemento:'',
      bairro:'Vila Nair', cidade:'São José dos Campos', estado:'São Paulo', cep:'12231-280', cpf:'96486444000158',
      telefone:'1227363323', entidade:'UNIFESP', atividade:'Acesso inicial ADMIN', perfil:1},
      {id:2, email:'maria@gmail.com', nome:'Maria Silva', logradouro:'Avenida Matos', numero:'105', complemento:"Sala 100",
      bairro:'Centro', cidade:'Belo Horizonte', estado:'Minas Gerais', cep:'38777012', cpf:'36378912377',
      telefone:'3193838393', entidade:'APAE', atividade:'Assistente Social', perfil:2},
      {id:3, email:'francojmf31@gmail.com', nome:'Joao Franco', logradouro:'Avenida Floriano', numero:'210', complemento:'',
      bairro:'Centro', cidade:'Jacareí' , estado:'São Paulo', cep:'12377012', cpf:'31628382740',
      telefone:'12982161650', entidade:'FATEC SJC', atividade:'Criador do SisWeb-CRIA', perfil:1},
      {id:4, email:'ander.limabr@gmail.com', nome:'Anderson Lima', logradouro:'Rua Geraldo de Oliveira', numero:'57', complemento:'',
      bairro:'Eldorado', cidade:'Caçapava', estado:'São Paulo', cep:'12289070', cpf:'25993358840',
      telefone:'12996519618', entidade:'UNIFESP  SJC', atividade:'Mestrando', perfil:1},

    ]
  }


  backMenu() {
    this.navCtrl.push('MenuPage');
  }

}
