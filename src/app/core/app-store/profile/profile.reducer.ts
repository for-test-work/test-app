import { Profile } from '../../interfaces/profile';
import { ProfileUnion, ProfileActions} from './profile.actions';

export interface ProfileState {
  profile: Profile;
}

const initialState: ProfileState = {
  profile: null
};

export function profileReducer(state = initialState, action: ProfileUnion) {
  switch (action.type) {
    case ProfileActions.ProfileLoadedSuccess:
      return {
        ...state,
        ...action.payload
      };
    case ProfileActions.ProfileLoadedError:
      return state
    case ProfileActions.Logout:
      return state;
    default:
      return state;
  }
}
