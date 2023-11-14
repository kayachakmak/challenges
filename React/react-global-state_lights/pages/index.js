import Link from "../components/Link";

export default function HomePage({ lights }) {
  const lightsOn = lights.filter((light) => {
    if (light.isOn) return light;
  });

  return (
    <div>
      <h1>Home</h1>
      <p>
        {lightsOn.length} {lightsOn.length <= 1 ? "light is" : "lights are"} on.
      </p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
