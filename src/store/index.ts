import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { initialState as profileInitialState } from "../reducers/profile";
import { initialState as repositoryInitialState } from "../reducers/repository";
import { rootReducer } from "../reducers";

const defaultInitialState = {
  profile: profileInitialState,
  repository: repositoryInitialState,
};

export const initStore = (initialState = defaultInitialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
