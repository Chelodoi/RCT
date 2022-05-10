import React from "react";

export const Button = ({ disabled, onButtonClick }) => {
  return (
    <button onClick={onButtonClick} disabled={disabled}>
      click
    </button>
  );
};
