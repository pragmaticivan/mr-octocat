import { ACTIONS }  from "../contants";
import { Dispatch } from "redux";
import { Store } from "../types";
import axios from "axios";
import { createAction } from "redux-actions";

export const userProfileRequestCommit = createAction(ACTIONS.USER_PROFILE_REQUEST_COMMIT);

export function fetchUserProfile() {
  return async (dispatch: Dispatch, _getState: () => Store) => {
    const profile = (await axios.get("https://api.github.com/users/octocat")).data;
    return dispatch(userProfileRequestCommit(profile));
  };
}
