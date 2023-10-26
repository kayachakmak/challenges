import "./styles.css";

export default function App() {
  function Greet({ name }) {
    const isCoach = ["Klaus", "Gimena", "Marcell", "Jan", "Sven"].includes(
      name
    );
    return <h1>{isCoach ? "Hello coach" : " Hello " + name}</h1>;
  }
  return <Greet name="Klaus" />;
}
