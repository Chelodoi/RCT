import React, { useState, useEffect } from "react";
import { Message } from "../Message/Message";
import { Button } from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import { Input } from "../Input/Input";

export const Form = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const handleChangeAuthor = (ev) => {
    setAuthor(ev.target.value);
  };

  const handleChangeMessage = (ev) => {
    setMessage(ev.target.value);
  };

  const handleClick = () => {
    setMessages([...messages, { message, author }]);
    setMessage("");
  };

  const chatbot = {
    name: "Senior Bot",
    answer: "Hello",
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== chatbot.name
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: chatbot.name,
            message: chatbot.answer,
          },
        ]);
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);
  
  // useEffect(()=>{
  //   if(message !== "" && author !== ""){
  //     setDisabled('false')
  //   }
  // })

  return (
    <div className="form">
      <Message messages={messages} />
      <div className="sendMessage">
        <Input change={handleChangeAuthor} author={author} />
        <TextArea change={handleChangeMessage} message={message} />
        <Button click={handleClick} author={author} message={message}/>
      </div>
    </div>
  );
};
