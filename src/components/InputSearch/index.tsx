import React from "react";
import style from "./style.css";

interface Props {
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class InputSearch extends React.Component<Props> {
  render() {
    const { onInput } = this.props;
    return (
      <input className={style.input} onInput={onInput} placeholder="Find a repository..." type="text"/>
    )
  }
}
