import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("BRAVO");
  }

  return (
    <Button
      color="blue"
      text="Next"
      backgroundColor="yellow"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
