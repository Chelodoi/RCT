import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button className="btnComp" onClick={this.props.click}>
        Отправить
      </button>
    );
  }
}
