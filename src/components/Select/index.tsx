import React from "react";
import SelectButton from "./SelectButton";
import SelectWrapper from "./SelectWrapper";
import style from "./style.css";

interface Props {
  selectLabel: string;
}
interface State {
  open: boolean;
}

export default class Select extends React.Component<Props, State> {
  state = {
    open: false,
  };

  onBtnClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { selectLabel } = this.props;
    const { open } = this.state;
    return (
      <div className={style.container}>
        <SelectButton onClick={this.onBtnClick}>{selectLabel}</SelectButton>
        {open && <SelectWrapper />}
      </div>
    );
  }
}
