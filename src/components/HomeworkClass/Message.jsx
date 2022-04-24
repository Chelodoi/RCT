import React from "react";
import { chatbot } from "./Constans";

export class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    if (
      this.props.messages.length > 0 &&
      this.props.messages[this.props.messages.length - 1].author !==
        chatbot.name
    ) {
      const timeout = setTimeout(() => {
        this.setState({
          messages: [
            ...this.props.messages,
            {
              author: chatbot.name,
              message: chatbot.answer,
            },
          ],
        });
      }, 1500);
    }
  }

  render() {
    return (
      <div className="messages">
        <ul className="messageList">
          {this.props.messages.map((message) => (
            <li className="message" key={message.indexOf}>
              <p className="message__author">{message.author}</p>
              <p className="message__text">{message.message}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
