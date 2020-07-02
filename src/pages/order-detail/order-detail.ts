import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemDTO } from '../../models/item.dto';
import { OrderService } from '../../services/domain/order.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  formGroup: FormGroup;
  itens: ItemDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public orderService: OrderService,
    public pedidoService: PedidoService,
    public alertCtrl: AlertController) {

  this.formGroup = this.formBuilder.group({
    nome: ['Nome da criança', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
    med_a : ['36', [Validators.maxLength(3)]],
    med_b : ['25', []],
    med_c : ['30', []],
    med_d : ['28', []],
    med_e : ['14', []],
    med_f : ['25', []],
    descricao : ['Descreva resumidamente a limitação da criança.', []]
  });
}


  nextPage(item: ItemDTO) {
    this.orderService.insert(this.formGroup.value)
    .subscribe(response => {
      this.itemInsert();
    },
    error => {});
    this.navCtrl.setRoot('PickAddressPage', {item: item});
  }

  itemInsert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Pedido efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  back() {
    this.navCtrl.setRoot('IndexPage');
  }
}
