const BASE_URL = "https://rickandmortyapi.com/api";

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${BASE_URL}`)
    .then(data => data.json())
   // .then(json =>)
})