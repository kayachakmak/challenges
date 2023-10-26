import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";
import { useState } from "react";
import "./Entry.css";

export default function Entry() {
  const [isFavorite, setIsFavorite] = useState(true);
  function handleClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <h5>FEB 27,2028</h5>
      <h3>Title</h3>
      <button onClick={handleClick}>
        {isFavorite ? (
          <img
            className="button__favorite"
            src={starFilled}
            alt="filled star"
          />
        ) : (
          <img className="button__favorite" src={star} alt="empty star" />
        )}
      </button>
      <p>text</p>
    </>
  );
}
