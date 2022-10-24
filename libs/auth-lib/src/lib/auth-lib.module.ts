import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AuthLibComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    AuthLibComponent
  ]
})
export class AuthLibModule { }
