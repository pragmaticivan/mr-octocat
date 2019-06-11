import { ACTIONS } from "../../src/contants";
import { Reducer } from "redux";

export interface RepositoryState {
  repositories: any[];
}

export const initialState: RepositoryState = {
  repositories: []
};

const reducer: Reducer<RepositoryState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_REPOSITORIES_COMMIT: {
      return {
        ...state,
        repositories: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as RepositoryReducer };
