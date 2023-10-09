console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  event.preventDefault();
  console.log(data);
  event.target.reset();
  event.target.elements.firstName.focus();
});
