import { Reducer } from "redux";
import { ACTIONS } from "../../src/contants";
import { Profile } from "../types";

export interface ProfileState {
  userProfile: Profile | null;
}

export const initialState: ProfileState = {
  userProfile: null
};

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_PROFILE_REQUEST_COMMIT: {
      const payload = action.payload;
      return {
        ...state,
        userProfile: {
          avatarUrl: payload.avatar_url,
          name: payload.name,
          url: payload.url,
        }
      };
    }
    default: {
      return state;
    }
  }
};


export { reducer as ProfileReducer };
