import { Store } from "../types";
import { Dispatch } from "redux";
import axios from "axios";
import { createAction } from "redux-actions";
import { USER_REPOSITORIES_COMMIT }  from "../contants";

export const useRepositoriesCommit = createAction(USER_REPOSITORIES_COMMIT);

export function fetchUserRepositories() {
  return async (dispatch: Dispatch, getState: () => Store) => {
    const repos = (await axios.get("https://api.github.com/users/octocat/repos")).data;
    return dispatch(useRepositoriesCommit(repos));
  };
}
