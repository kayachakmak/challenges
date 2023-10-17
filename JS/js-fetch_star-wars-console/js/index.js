console.clear();

const url = "https://swapi.dev/api/people";

/* async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data[2]["eye-color"]);
      console.log(data);
    } else {
      console.error("Bad response");
    }
  } catch (error) {
    console.error("An error occured");
  }
}
 */
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    console.log("R2-2D's eye color: " + data.results[2]["eye_color"]);
    console.log("Princess Leia's height: " + data.results[4].height);
  } catch (error) {
    console.log("An error occured", error);
  }
}

fetchData();
