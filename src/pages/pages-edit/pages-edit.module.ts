import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesEditPage } from './pages-edit';

@NgModule({
  declarations: [
    PagesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesEditPage),
  ],
})
export class PagesEditPageModule {}
