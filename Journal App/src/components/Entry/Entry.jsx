import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";
import { useState } from "react";
import "./Entry.css";
import PropTypes from "prop-types";

export default function Entry({ entry }) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="entry">
      <h6 className="entry__date">{entry.date}</h6>
      <h5>{entry.motto}</h5>
      <button className="button__favorite" onClick={handleClick}>
        {isFavorite ? (
          <img src={starFilled} alt="filled star" />
        ) : (
          <img src={star} alt="empty star" />
        )}
      </button>
      <p>{entry.notes}</p>
    </article>
  );
}

Entry.propTypes = {
  entry: PropTypes.shape({
    date: PropTypes.string.isRequired,
    motto: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
  }).isRequired,
};
