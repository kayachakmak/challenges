/* eslint-disable react/prop-types */
import Entry from "../Entry/Entry";

export default function EntryList({ entries }) {
  return (
    <>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </>
  );
}
