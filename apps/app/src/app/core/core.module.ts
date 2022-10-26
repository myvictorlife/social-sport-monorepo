import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature(coreEffectsAtBootstrap),
  ],
})
export class CoreModule {}
