import React from "react";

function Button(props) {
  const setColor = props.setColor;
  return (
    <button
      onClick={() => setColor("Red")}
      className="outline-none px-4 text-white shadow-lg"
      style={{ backgroundColor: props.btnColor }}
    >
      {props.btnColor}
    </button>
  );
}

export default Button;
