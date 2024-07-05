import { fetchJoke } from "./fetching";
import { saveJoke } from "./stroing";
import "./styles/main.scss";

const currentJokeEl = document.querySelector(".current-joke__text");
const loadNewJokeBtn = document.querySelector(".current-joke__generate");
const saveJokeBtn = document.querySelector(".current-joke__save");

let currentJoke = "";

async function loadNewJoke() {
  const joke = await fetchJoke();

  if (currentJoke) {
    saveJokeBtn.classList.remove("current-joke__save--disabled");
  }

  currentJoke = joke;
  currentJokeEl.innerText = joke;
}

function saveCurrentJoke() {
  if (currentJoke) {
    saveJoke(currentJoke);
  }
}

loadNewJokeBtn.addEventListener("click", loadNewJoke);
saveJokeBtn.addEventListener("click", saveCurrentJoke);
