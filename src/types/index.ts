import { ProfileState } from "../reducers/profile";
import { RepositoryState } from "../reducers/repository";

export interface Profile {
  avatarUrl: string;
  url: string;
  name: string;
}

// Initial Redux Store
export interface Store {
  profile: ProfileState;
  repository: RepositoryState;
}
