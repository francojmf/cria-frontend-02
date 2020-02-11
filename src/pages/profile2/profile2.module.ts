import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profile2Page } from './profile2';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    Profile2Page,
  ],
  imports: [
    IonicPageModule.forChild(Profile2Page),
  ],
  providers: [
    PedidoService
  ]
})
export class Profile2PageModule {}
