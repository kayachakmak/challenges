console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-
  alert("Form submitted");
  success.removeAttribute("hidden");
});

tosCheckbox.addEventListener("change", () => {
  tosCheckbox.checked ? hideTosError() : showTosError();
});
