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
      {id:1, email:'unifesp@unifesp.gov.br', nome:'UNIFESP SJC', logradouro:36, numero:27, complemento:33, bairro:30, cidade:14 , estado:25, cpf:'96486444000158', CEP:'', telefone:''},
      {id:2, email:'maria@gmail.com', nome:'Maria Silva', logradouro:38, numero:27, complemento:33, bairro:30, cidade:16 , estado:27, cpf:'', CEP:'', telefone:''},
      {id:3, email:'francojmf31@gmail.com', nome:'Joao Franco', logradouro:36, numero:25, complemento:30, bairro:28, cidade:14 , estado:25, cpf:'', CEP:'', telefone:''},
      {id:4, email:'ander.limabr@gmail.com', nome:'Anderson Lima', logradouro:37, numero:26, complemento:31, bairro:29, cidade:15 , estado:26, cpf:'', CEP:'', telefone:''},

    ]
  }


  backMenu() {
    this.navCtrl.push('MenuPage');
  }

}
