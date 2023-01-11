import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtDetailsPageRoutingModule } from './court-details-routing.module';

import { CourtDetailsPage } from './court-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtDetailsPageRoutingModule
  ],
  declarations: [CourtDetailsPage]
})
export class CourtDetailsPageModule {}
