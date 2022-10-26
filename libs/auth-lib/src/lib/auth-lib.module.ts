import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthLibService } from './auth-lib.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AuthLibComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    AuthLibComponent
  ],
  providers: [AuthLibService]
})
export class AuthLibModule { }
