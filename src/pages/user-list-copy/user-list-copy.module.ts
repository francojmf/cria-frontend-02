import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListCopyPage } from './user-list-copy';

@NgModule({
  declarations: [
    UserListCopyPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListCopyPage),
  ],
})
export class UserListPageModule {}
