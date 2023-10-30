/* eslint-disable react/prop-types */
import TwoTabs from "../TwoTabs/TwoTabs";

export default function Entries({ entries }) {
  return (
    <section>
      <TwoTabs entries={entries} />
    </section>
  );
}
