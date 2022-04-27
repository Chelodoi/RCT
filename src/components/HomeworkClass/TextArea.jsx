import React from "react";

export class TextArea extends React.Component {
  render() {
    return (
      <textarea
        placeholder="Введите сообщение..."
        className="textAreaComp"
        value={this.props.message}
        onChange={this.props.change}
        autoFocus
      ></textarea>
    );
  }
}
