console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const section = document.createElement("section");
section.className = "post";

const p = document.createElement("p");
p.className = "post_content";
p.textContent = " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.className = "post__footer";

const span = document.createElement("span");
span.className = "post__username";
span.textContent = "@username";

const button = document.createElement("button");
button.className = "post__button";
button.textContent = "♥ Like";

console.log(section, p, footer, span, button);

document.body.append(section);

section.append(p, footer);

footer.append(span, button);

button.addEventListener("click", handleLikeButtonClick);
