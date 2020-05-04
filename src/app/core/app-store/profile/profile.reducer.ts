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
        profile: action.payload.profile
      };
    case ProfileActions.ProfileLoadedError:
      return {
        ...state,
        profile: null
      };
    case ProfileActions.Logout:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
