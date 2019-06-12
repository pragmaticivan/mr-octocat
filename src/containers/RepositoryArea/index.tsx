import Link from "next/link";
import PopularRepositories from "../../components/PopularRepositories";
import React from "react";
import Repositories from "../../components/Repositories";
import { connect } from "react-redux";
import style from "./style.css";
import orderBy from "lodash/orderBy";
import { Repository } from "../../types";

interface Props {
  pageTab: string | null;
  repositories: Repository[];
  popularRepositories: Repository[];
}

class RepositoryArea extends React.Component<Props> {
  render() {
    const { pageTab, repositories, popularRepositories } = this.props;
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
          <PopularRepositories repositories={popularRepositories} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: orderBy(
      state.repository.repositories,
      ["updated_at"],
      "desc"
    ),
    popularRepositories: orderBy(
      state.repository.repositories,
      ["stargazers_count"],
      "desc"
    ).slice(0, 6),
  };
};

export default connect(mapStateToProps)(RepositoryArea);
