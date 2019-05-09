import { ProfileReducer } from "./profile";
import { RepositoryReducer } from "./repository";
import { combineReducers } from "redux";
import { Store } from "../types";

export const rootReducer = combineReducers<Store>({
  profile: ProfileReducer,
  repository: RepositoryReducer,
});
