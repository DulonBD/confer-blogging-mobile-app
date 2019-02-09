import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { SignUpPage } from './sign-up';

@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
  ],
})
export class SignUpPageModule {}
