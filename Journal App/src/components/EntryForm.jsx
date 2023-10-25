import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form>
      <legend>NEW ENTRY</legend>
      <label htmlFor="motto">Motto</label>
      <input type="text" name="motto" id="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" />
      <button type="submit">
        <strong>Create</strong>
      </button>
    </form>
  );
}
