import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CourtService } from './services/court/court.service';
import { ProfileService } from './services/profile/profile.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap),
  ],
  providers: [
    CourtService,
    ProfileService
  ]
})
export class CoreModule {}
