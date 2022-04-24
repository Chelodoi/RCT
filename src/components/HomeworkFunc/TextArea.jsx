import React from "react";

export const TextArea = (props) => {
  return (
    <textarea
      placeholder="Введите сообщение..."
      className="textAreaComp"
      value={props.message}
      onChange={props.change}
      autoFocus
    ></textarea>
  );
};
