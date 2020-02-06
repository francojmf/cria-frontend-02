import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  pedido: PedidoDTO;



  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.pedido = this.navParams.get('pedido');

    this.formGroup = this.formBuilder.group({
      nome:  "nome"
    });
  }

  nextPage() {
    this.pedido.pagamento = this.formGroup.value;
    this.navCtrl.setRoot('DeliveryPage', {pedido: this.pedido});
  }
}
