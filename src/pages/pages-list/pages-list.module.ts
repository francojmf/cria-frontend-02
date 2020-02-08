import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesListPage } from './pages-list';

@NgModule({
  declarations: [
    PagesListPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesListPage),
  ],
})
export class PagesListPageModule {}
