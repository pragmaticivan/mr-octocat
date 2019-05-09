import React from "react";
import style from "./style.css";
import Link from "next/link";
import RepoCard from "../../components/RepoCard";

interface Props {
  pageTab: string | null;
}

export default class RepositoryArea extends React.Component<Props> {
  render() {
    const { pageTab } = this.props;
    return (
      <div className={style.container}>
        <ul className={style.repoNavigation}>
          <li className={pageTab ? "" : style.active}>
            <Link href="/">
              <a>Overview</a>
            </Link>
          </li>
          <li className={pageTab === "repositories" ? style.active : ""}>
            <Link href="/?tab=repositories">
              <a>Repositories <span>8</span></a>
            </Link>
          </li>
        </ul>

        <div>
          <h3>Popular repositories</h3>

          <div className={style.repoCardList}>
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
          </div>
        </div>
      </div>
    )
  }
}
