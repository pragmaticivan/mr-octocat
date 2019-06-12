import React from "react";
import style from "./style.css";

export default class InputSearch extends React.Component {
  render() {
    return (
      <input
        className={style.input}
        placeholder="Find a repository..."
        type="text"
      />
    );
  }
}
