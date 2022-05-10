import React from "react";

export const Button = ({ disabled, onButtonClick }) => {
  // console.log(props);

  return (
    <button onClick={onButtonClick} disabled={disabled}>
      click
    </button>
  );
};
