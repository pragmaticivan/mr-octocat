import { ACTIONS } from "../../src/contants";
import { Profile } from "../types";
import { Reducer } from "redux";

export interface ProfileState {
  userProfile: Profile | null;
}

export const initialState: ProfileState = {
  userProfile: null
};

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_PROFILE_REQUEST_COMMIT: {
      const { avatar_url, name, url } = action.payload;
      return {
        ...state,
        userProfile: {
          avatarUrl: avatar_url,
          name: name,
          url: url
        }
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as ProfileReducer };
