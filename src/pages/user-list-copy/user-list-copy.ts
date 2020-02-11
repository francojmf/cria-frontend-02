import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDTO } from '../../models/item.dto';
import { OrderService } from '../../services/domain/order.service';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-user-list-copy',
  templateUrl: 'user-list-copy.html',
})
export class UserListCopyPage {


  public pedidos: ItemDTO;
  picture: string;
  profileImage;
  cameraOn: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public pedidoService: OrderService
    ) {

      this.profileImage = 'assets/imgs/avatar-blank.png';
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.id) {
      this.pedidoService.findById(localUser.id)
        .subscribe(response => {
          this.pedidos = response as ItemDTO;

        },
        error => {
          if (error.status == 403) {
            this.navCtrl.setRoot('MenuPage');
          }
        });
    }
    else {
      this.navCtrl.setRoot('MenuPage');
    }
  }

  backMenu() {
    this.navCtrl.push('MenuPage');
  }

}

