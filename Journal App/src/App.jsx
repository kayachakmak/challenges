import "./App.css";
import Header from "./components/Header/Header";
import EntryForm from "./components/EntryForm/EntryForm";
import Entries from "./components/Entries/Entries";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { initialEntries } from "../lib";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries((prevEntries) => [
      { ...newEntry, id: uid(), date: date },
      ...prevEntries,
    ]);
  }

  return (
    <>
      <Header />
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <Entries entries={entries} />
      </main>
      <Footer />
    </>
  );
}

export default App;
