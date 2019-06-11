import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { initialState as profileInitialState } from "../reducers/profile";
import { initialState as repositoryInitialState } from "../reducers/repository";
import { rootEpic } from "../epics";
import { rootReducer } from "../reducers";
import thunkMiddleware from "redux-thunk";

const defaultInitialState = {
  profile: profileInitialState,
  repository: repositoryInitialState
};

export const initStore = (initialState = defaultInitialState) => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(epicMiddleware, thunkMiddleware))
  );

  // Redux observable root epic
  epicMiddleware.run(rootEpic);

  return store;
};
