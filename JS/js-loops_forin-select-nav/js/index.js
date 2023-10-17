console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (key in languages) {
  const option = document.createElement("option");
  select.append(option);
  option.value = key;
  option.textContent = languages[key];
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (let i in nav) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  ul.append(li);
  li.append(anchor);

  anchor.href = nav[i].href;
  anchor.textContent = nav[i].text;
}

// --^-- write/change code here --^--
