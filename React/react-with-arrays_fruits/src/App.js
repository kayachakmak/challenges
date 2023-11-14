import { Fragment } from "react";
import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 42,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 987,
      name: "🥭 Mango",
      color: "orange",
    },
    {
      id: 555,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 789,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <Fragment key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </Fragment>
        );
      })}
    </div>
  );
}
