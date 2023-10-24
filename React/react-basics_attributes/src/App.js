import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Hello World</h2>
      <label htmlFor="input">Please enter text</label>
      <input type="text" name="input" id="input" />
      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Web/Events#event_listing"
      >
        Here is our link
      </a>
    </article>
  );
}
