import { Reducer } from "redux";
import { USER_REPOSITORIES_COMMIT } from "../../src/contants";

export interface RepositoryState {
  repositories: any[];
}

export const initialState: RepositoryState = {
  repositories: []
};

const reducer: Reducer<RepositoryState> = (state = initialState, action) => {
  switch (action.type) {
    case USER_REPOSITORIES_COMMIT: {
      const payload = action.payload;
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
