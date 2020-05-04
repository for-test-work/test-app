import { Action } from '@ngrx/store';
import { Profile } from '../../interfaces/profile';

export enum ProfileActions {
  LoadProfile = '[Profile], Load Profile',
  ProfileLoadedSuccess = '[Profile], Profile Loaded Success',
  ProfileLoadedError = '[Profile], Profile Loaded Error',
  Logout = '[Logout]'
}

export class LoadProfile implements Action {
  readonly type = ProfileActions.LoadProfile;
}

export class ProfileLoadedSuccess implements Action {
  readonly type = ProfileActions.ProfileLoadedSuccess;

  constructor(public payload: { profile: Profile }) {
  }
}

export class ProfileLoadedError implements Action {
  readonly type = ProfileActions.ProfileLoadedError;
}

export class Logout implements Action {
  readonly type = ProfileActions.Logout;
}

export type ProfileUnion = LoadProfile | ProfileLoadedSuccess | ProfileLoadedError | Logout;
