import React from "react";
export const Button = (props) => {
  return (
    <button className="btnComp" onClick={props.click}>
      Отправить
    </button>
  );
};
