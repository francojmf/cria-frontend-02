import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {


  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {

  }

  order() {
    this.navCtrl.setRoot('CategoriasPage');
  }

  usuarios() {
    this.navCtrl.setRoot('EditPage');
  }
  pedidos() {
    this.navCtrl.setRoot('ListPage');
  }
  profile() {
    this.navCtrl.setRoot('ProfilePage');
  }
  profile2() {
    this.navCtrl.setRoot('Profile2Page');
  }
}
