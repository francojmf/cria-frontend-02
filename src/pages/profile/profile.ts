import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/domain/usuario.service';
import { API_CONFIG } from '../../config/api.config';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { EnderecosDTO } from '../../models/enderecos.dto';
import { CidadeDTO } from '../../models/cidade.dto';
import { PedidosDTO } from '../../models/pedidos.dto';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pedido: PedidosDTO;
  usuario: UsuarioDTO;
  endereco: EnderecosDTO;
  cidade: CidadeDTO;
  picture: string;
  profileImage;
  cameraOn: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public pedidoService: PedidoService,
    public camera: Camera,
    public sanitizer: DomSanitizer) {

      this.profileImage = 'assets/imgs/avatar-blank.png';
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response as UsuarioDTO;
          this.getImageIfExists();
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


  private findEndereco(id: string, list: EnderecosDTO[]) : EnderecosDTO {
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  getImageIfExists() {
    this.usuarioService.getImageFromBucket(this.usuario.id)
    .subscribe(response => {
      this.usuario.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.usuario.id}.jpg`;
      this.blobToDataURL(response).then(dataUrl => {
        let str : string = dataUrl as string;
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
      });
    },
    error => {
      this.profileImage = 'assets/imgs/avatar-blank.png';
    });
  }

  // https://gist.github.com/frumbert/3bf7a68ffa2ba59061bdcfc016add9ee
  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
        let reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => fulfill(reader.result);
        reader.readAsDataURL(blob);
    })
  }

  getCameraPicture() {

    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.picture = 'data:image/png;base64,' + imageData;
     this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

  getGalleryPicture() {

    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.picture = 'data:image/png;base64,' + imageData;
     this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

  sendPicture() {
    this.usuarioService.uploadPicture(this.picture)
      .subscribe(response => {
        this.picture = null;
        this.getImageIfExists();
      },
      error => {
      });
  }

  back() {
    this.navCtrl.setRoot('MenuPage');
  }

  cancel() {
    this.picture = null;
  }
}
