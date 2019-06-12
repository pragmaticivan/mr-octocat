import { Dispatch } from "redux";
import { Store } from "../types";
import { ACTIONS } from "../contants";
import axios from "axios";
import { createAction } from "redux-actions";

export const useRepositoriesCommit = createAction(
  ACTIONS.USER_REPOSITORIES_COMMIT
);

export function fetchUserRepositories() {
  return async (dispatch: Dispatch, _getState: () => Store) => {
    let repos = (await axios.get("https://api.github.com/users/octocat/repos"))
      .data;
    // Get Parent information when required;
    repos = await Promise.all(
      repos.map(async repo => {
        if (repo.fork) {
          const fullRepo = (await axios.get(
            `https://api.github.com/repos/${repo.full_name}`
          )).data;
          repo.parent = fullRepo.parent.full_name;
          repo.parent_html_url = fullRepo.parent.html_url;
        }
        return repo;
      })
    );

    return dispatch(useRepositoriesCommit(repos));
  };
}
