import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {

  pedido: PedidoDTO;
  dias: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // data_entrega: string;
  // data_envio: string;

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.pedido = this.navParams.get('pedido');

    this.formGroup = this.formBuilder.group({
      numeroDeDias: [1],
      "@type": ["correios"]
    });
    //  data_entrega: ["previsto"],
    //  data_envio: ["enviado"],
  }

  nextPage() {
    this.pedido.entrega = this.formGroup.value;
    this.navCtrl.setRoot('OrderConfirmationPage', {pedido: this.pedido});
  }
}
