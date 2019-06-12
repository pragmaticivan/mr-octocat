import { ProfileState } from "../reducers/profile";
import { RepositoryState } from "../reducers/repository";

export interface Profile {
  avatarUrl: string;
  url: string;
  name: string;
}

// Redux Store
export interface Store {
  profile: ProfileState;
  repository: RepositoryState;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks: number;
  forks_count: number;
  language: string;
  fork: boolean;
  parent_html_url: string;
  parent: string;
  created_at: string;
  updated_at: string;
}
