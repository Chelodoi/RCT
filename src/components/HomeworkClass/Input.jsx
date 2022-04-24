import React from "react";

export class Input extends React.Component {
  render() {
    return (
      <input
        className="inputComp"
        type="text"
        value={this.props.author}
        onChange={this.props.change}
        placeholder="Ваше имя"
      ></input>
    );
  }
}
