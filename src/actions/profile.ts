import { Store } from "../types";
import { Dispatch } from "redux";
import axios from "axios";
import { createAction } from "redux-actions";
import { ACTIONS } from "../contants";

export const userProfileRequestCommit = createAction(
  ACTIONS.USER_PROFILE_REQUEST_COMMIT
);

export function fetchUserProfile() {
  return async (dispatch: Dispatch, _getState: () => Store) => {
    const profile = (await axios.get("https://api.github.com/users/octocat"))
      .data;
    return dispatch(userProfileRequestCommit(profile));
  };
}
