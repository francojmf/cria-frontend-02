import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {


  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {

  }

  gologin() {
    this.navCtrl.push('HomePage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
