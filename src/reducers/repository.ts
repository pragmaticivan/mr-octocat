import { Reducer } from "redux";
import { ACTIONS } from "../../src/contants";
import pick from "lodash/pick";
import { Repository } from "../types";

export interface RepositoryState {
  repositories: Repository[];
}

export const initialState: RepositoryState = {
  repositories: [],
};

const reducer: Reducer<RepositoryState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_REPOSITORIES_COMMIT: {
      const payload = action.payload.map(repo => {
        return pick(repo, [
          "id",
          "name",
          "full_name",
          "html_url",
          "stargazers_count",
          "forks",
          "forks_count",
          "language",
          "fork",
          "description",
          "parent_html_url",
          "parent",
          "created_at",
          "updated_at",
        ]);
      });
      return {
        ...state,
        repositories: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as RepositoryReducer };
