import React, { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Message } from "./Message";
import { TextArea } from "./TextArea";

export class Form extends Component {
  state = {
    messages: [],
    message: "",
    author: "",
  };

  handleChangeAuthor = (ev) => {
    this.setState({ author: ev.target.value });
  };

  handleChangeMessage = (ev) => {
    this.setState({ message: ev.target.value });
  };

  handleClick = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          message: this.state.message,
          author: this.state.author,
        },
      ],
    });
    this.setState({ author: "" });
  };

  render() {
    return (
      <div className="form">
        <Message messages={this.state.messages} />
        <div
          className="sendMessage"
          author={this.state.author}
          message={this.state.message}
        >
          <Input change={this.handleChangeAuthor} author={this.state.author} />
          <TextArea
            change={this.handleChangeMessage}
            message={this.state.message}
          />
          <Button click={this.handleClick} />
        </div>
      </div>
    );
  }
}
