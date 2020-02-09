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
    this.navCtrl.push('CategoriasPage');
  }

  pedidos() {
    this.navCtrl.push('ListPage');
  }
  profile() {
    this.navCtrl.push('ProfilePage');
  }
}
