import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PedidosDTO } from '../../models/pedidos.dto';
import { PedidoService } from '../../services/domain/pedido.service';
import { ItemDTO } from '../../models/item.dto';
import { ItemPedidoDTO } from '../../models/item-pedido.dto';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  pedidos: PedidosDTO;
  nome: ItemDTO['nome'];
  descricao: ItemDTO['descricao'];
  pedidoService: any;

  constructor(
    navCtrl: NavController,
    pedidos : PedidoService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesListPage');
    this.pedidos = this.pedidoService.getPedidos();

  }

}
