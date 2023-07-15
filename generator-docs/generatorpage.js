const BASE_URL = "https://rickandmortyapi.com/api/character";

const button = document.querySelector("#submit");
const form = document.querySelector("#new-character");
const div = document.querySelector("div");

function generateNewCharacter(results) {
  const newCharacter = results;
  const searchValue = document.getElementById("name").value;

  for (let i = 0; i < newCharacter.results.length; i++) {
    const character = newCharacter.results[i];
    const firstName = character.name.split(" ")[0]; 
    if (firstName === searchValue) {
      let image = character.image;
      const section = document.createElement("section");
      const img = document.createElement("img");
      img.setAttribute("src", image);
      img.setAttribute("alt", searchValue);
      const h2 = document.createElement("h2");
      h2.textContent = character.name;

      div.innerHTML = '';
      div.append(h2, img);
      div.append(section);
      return ;
  }
  div.innerHTML = '<p>No matching character found.</p>';
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      generateNewCharacter(data);
    });
});
}