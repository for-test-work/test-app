import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './profile.reducer';
import { ProfileEffects } from './profile.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
  ]
})
export class ProfileStoreModule { }
