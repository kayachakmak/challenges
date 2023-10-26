import "./App.css";
import Header from "./components/Header/Header";
import EntryForm from "./components/EntryForm/EntryForm";
import Entries from "./components/Entries/Entries";

function App() {
  return (
    <>
      <Header />
      <main>
        <EntryForm />
        <Entries />
      </main>
    </>
  );
}

export default App;
