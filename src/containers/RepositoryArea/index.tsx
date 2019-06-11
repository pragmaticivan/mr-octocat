import Link from "next/link";
import PopularRepositories from "../../components/PopularRepositories";
import React from "react";
import Repositories from "../../components/Repositories";
import { connect } from "react-redux";
import style from "./style.css";

interface Props {
  pageTab: string | null;
  repositories: [];
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
              <a>
                Repositories <span>8</span>
              </a>
            </Link>
          </li>
        </ul>
        {pageTab === "repositories" ? (
          <Repositories repositories={repositories} />
        ) : (
          <PopularRepositories repositories={repositories} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repository.repositories
  };
};

export default connect(mapStateToProps)(RepositoryArea);
