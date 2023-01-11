import { NgModule } from '@angular/core';

import { CourtsComponent } from './courts/courts.component';
import { CourtComponent } from './courts/court/court.component';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        CourtsComponent,
        CourtComponent
    ],
    exports: [
        CourtsComponent,
        CourtComponent
    ]
})
export class LibsComponentsModule { }
