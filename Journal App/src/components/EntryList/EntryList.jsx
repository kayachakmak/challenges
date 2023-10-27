import Entry from "../Entry/Entry";
import { entries } from "../../../lib";

export default function EntryList() {
  return (
    <>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </>
  );
}
