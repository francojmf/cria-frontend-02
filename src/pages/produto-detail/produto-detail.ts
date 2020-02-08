import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';
import { CartService } from '../../services/domain/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-produto-detail',
  templateUrl: 'produto-detail.html',

})
export class ProdutoDetailPage {

  item: ProdutoDTO;
  formGroup: FormGroup;
//  image1: 'https://s3.console.aws.amazon.com/s3/buckets/cria01/medidas.jpg';
  selectedImage: 'src/assets/imgs/medidas.jpg';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public produtoService: ProdutoService,
    public cartService: CartService) {

      this.formGroup = this.formBuilder.group({
        nome: ['Nome da criança', []],
        med_a : ['36', []],
        med_b : ['25', []],
        med_c : ['30', []],
        med_d : ['28', []],
        med_e : ['14', []],
        med_f : ['25', []],
        descricao : ['Descreva resumidamente a limitação da criança.', []]
  });
 }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id');
    this.produtoService.findById(produto_id)
      .subscribe(response => {
        this.item = response;
        this.getImageUrlIfExists();
      },
      error => {});
  }

  getImageUrlIfExists() {
    this.produtoService.getImageFromBucket(this.item.id)
      .subscribe(response => {
        this.item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
      },
      error => {});
  }

  addToCart(produto: ProdutoDTO) {
    this.cartService.addProduto(produto);
    this.navCtrl.setRoot('CartPage');
//    this.navCtrl.setRoot('DeliveryPage');
//    this.navCtrl.setRoot('PickAddressPage');
  }

  back() {
    this.navCtrl.push('IndexPage');
  }
}
