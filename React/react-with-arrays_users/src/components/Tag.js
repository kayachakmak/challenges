import "./Tag.css";

export default function Tag({ tag }) {
  return tag === "admin" ? (
    <li className="tag--highlight tag">{tag}</li>
  ) : (
    <li className="tag">{tag}</li>
  );
}
