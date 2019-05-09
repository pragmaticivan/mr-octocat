import React from "react";
import style from "./style.css";
import Link from "next/link";
import RepoCard from "../../components/RepoCard";
import { connect } from "react-redux";

interface Props {
  pageTab: string | null;
  repositories: any[]
}

class RepositoryArea extends React.Component<Props> {
  render() {
    const { pageTab, repositories } = this.props;
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
            {repositories.map((repo) => {
              return(<RepoCard repository={repo} key={repo.id} />)
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repository.repositories.slice(0, 6),
  }
}

export default connect(mapStateToProps)(RepositoryArea);
