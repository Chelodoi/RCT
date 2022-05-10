import React from "react";

export const Button = ({click, message, author}) => {
  return (
    <button className="btnComp" onClick={click} disabled={!message || !author}>
      Отправить
    </button>
  );
};
