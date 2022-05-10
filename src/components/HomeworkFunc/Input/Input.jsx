import React from "react";
export const Input = (props) => {
  return (
    <input
      className="inputComp"
      type="text"
      value={props.author}
      onChange={props.change}
      placeholder="Ваше имя"
    ></input>
  );
};
