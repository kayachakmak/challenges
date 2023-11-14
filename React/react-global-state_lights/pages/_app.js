import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const initial = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initial);
  const [isDimmed, setIsDimmed] = useState(true);

  useEffect(() => {
    lights.every((light) => !light.isOn)
      ? setIsDimmed(true)
      : setIsDimmed(false);
  }, [lights]);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id !== id ? light : { ...light, isOn: !light.isOn };
      })
    );
  }

  function allLightsOff() {
    return setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function allLightsOn() {
    return setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onOff={allLightsOff}
        onOn={allLightsOn}
      />
    </Layout>
  );
}
