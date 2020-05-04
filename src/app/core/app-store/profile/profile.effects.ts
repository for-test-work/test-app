import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProfileLoadedSuccess, ProfileLoadedError, ProfileActions } from './profile.actions';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../interfaces/profile';


@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.LoadProfile),
    mergeMap(() => this.profileService.getProfile()
      .pipe(
        map((data: Profile) => (new ProfileLoadedSuccess({ profile: data }))),
        catchError(() => of(new ProfileLoadedError())
        ))
    )
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {
  }
}
