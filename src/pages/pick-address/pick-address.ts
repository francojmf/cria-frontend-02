import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecosDTO } from '../../models/enderecos.dto';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { PedidosDTO } from '../../models/pedidos.dto';
import { CartService } from '../../services/domain/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntregaDTO } from '../../models/entrega.dto';
import { ItemDTO } from '../../models/item.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecosDTO[];
  pedido: PedidosDTO;
  entrega: EntregaDTO;
  item: ItemDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.items = response['enderecos'];

          let cart = this.cartService.getCart();

          this.pedido = {
            usuario: {id: response['id']},
            enderecoDeEntrega: null,
            pagamento: null,
            entrega: null,
            item: null,
            itens : cart.items.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}})
          }
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

  nextPage(item: EnderecosDTO) {
    this.pedido.enderecoDeEntrega = {id: item.id};
    this.navCtrl.push('OrderPayPage', {pedido: this.pedido});
  }
}
