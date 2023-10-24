import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <h3>{isHappy ? "😄" : "😟"}</h3>;
}
