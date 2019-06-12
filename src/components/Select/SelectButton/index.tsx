import React from "react";
import Button from "../../Button";

interface Props {
  onClick: () => void;
}

export default class SelectButton extends React.Component<Props> {
  render() {
    const { onClick, children } = this.props;
    return <Button onClick={onClick}>{children}</Button>;
  }
}
