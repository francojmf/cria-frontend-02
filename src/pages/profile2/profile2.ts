import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosDTO } from '../../models/pedidos.dto';
import { CartItem } from '../../models/cart-item';
import { EnderecosDTO } from '../../models/enderecos.dto';
import { UsuarioDTO } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/domain/usuario.service';
import { CartService } from '../../services/domain/cart.service';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-profile2',
  templateUrl: 'profile2.html',
})
export class Profile2Page {

  pedido: PedidosDTO;
  cartItems: CartItem[];
  usuario: UsuarioDTO;
  endereco: EnderecosDTO;
  codpedido: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioService: UsuarioService,
    public cartService: CartService,
    public pedidoService: PedidoService) {

    this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;

    this.usuarioService.findById(this.pedido.usuario.id)
      .subscribe(response => {
        this.usuario = response as UsuarioDTO;
        this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
      },
      error => {
        this.navCtrl.setRoot('MenuPage');
      });
  }

  public findEndereco(id: string, list: EnderecosDTO[]) : EnderecosDTO {
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  public extractId(location : string) : string {
    let position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }

  total() : number {
    return this.cartService.total();
  }

  back() {
    this.navCtrl.setRoot('CartPage');
  }

  home() {
    this.navCtrl.setRoot('MenuPage');
  }

  checkout() {
    this.navCtrl.setRoot('MenuPage');
  }

}
