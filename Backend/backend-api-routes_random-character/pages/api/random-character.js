import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
  };
  console.log(character);

  res.status(200).json(character);
}
