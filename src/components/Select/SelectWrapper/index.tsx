import React from "react";
import style from "./style.css";

export default class SelectWrapper extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div>Select type</div>
        <ul>
          <li>All</li>
          <li>Sources</li>
          <li>Forks</li>
        </ul>
      </div>
    );
  }
}
