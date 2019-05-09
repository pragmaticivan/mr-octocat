import { Reducer } from "redux";
import { USER_PROFILE_REQUEST_COMMIT } from "../../src/contants";
import { Profile } from "../types";

export interface ProfileState {
  userProfile: Profile | null;
}

export const initialState: ProfileState = {
  userProfile: null
};

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST_COMMIT: {
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
