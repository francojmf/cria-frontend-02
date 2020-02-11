import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  public pedidos;

  constructor(
    public navCtrl: NavController,

  ) {
    this.pedidos= [
      {id:1, ped:1, produto:2, nome:'Andre', med_a:36, med_b:27, med_c:33, med_d:30, med_e:14 , med_f:25, descricao:'Emiplegia usa esquerda'},
      {id:1, ped:1, produto:1, nome:'Gustavo', med_a:38, med_b:27, med_c:33, med_d:30, med_e:16 , med_f:27, descricao:'Emiplegia usa direita'},
      {id:1, ped:2, produto:1, nome:'Andriana', med_a:36, med_b:25, med_c:30, med_d:28, med_e:14 , med_f:25, descricao:'Paralisia da cintura para baixo'},
      {id:1, ped:2, produto:2, nome:'Matheus', med_a:37, med_b:26, med_c:31, med_d:29, med_e:15 , med_f:26, descricao:'Paralisia cerebral, usa esquerda'},
    ]
  }


  backMenu() {
    this.navCtrl.push('MenuPage');
  }

}
