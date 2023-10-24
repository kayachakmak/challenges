import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={4} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h3>
      {valueA} + {valueB} = {sum}
    </h3>
  );
}
