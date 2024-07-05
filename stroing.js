const LOCAL_STROAGE_KEY = "jokes";

export function getSaveJokes() {
  return JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY)) || [];
}

export function saveJoke(joke) {
  const saveJokes = getSaveJokes();

  if (savedJokes.find((savedJoke) => saveJoke === joke)) {
    alert("Dieser Witz wurde bereits gespeichert!");
    return;
  }

  const newSaveJokes = [joke, ...saveJokes];
  localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(newSaveJokes));
}
