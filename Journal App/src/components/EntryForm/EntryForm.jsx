/* eslint-disable react/prop-types */
import "./EntryForm.css";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>NEW ENTRY</legend>
      <label htmlFor="motto">Motto</label>
      <input type="text" name="motto" id="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" />
      <button type="submit" className="button__create">
        <strong>Create</strong>
      </button>
    </form>
  );
}
