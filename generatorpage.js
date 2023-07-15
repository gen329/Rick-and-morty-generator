const BASE_URL = "https://rickandmortyapi.com/api/character";

const button = document.querySelector("#submit");
const form = document.querySelector("#new-character");
const div = document.querySelector("div")


function generateNewCharacter(results) {
  const newCharacter = results;
  let image = newCharacter.results[0].image;
  const section = document.createElement("section");
  const img = document.createElement("img");
  img.setAttribute("src", `${image}`);
  img.setAttribute("alt","name");
  const h2 = document.createElement("h2");
  h2.textContent = newCharacter.name;
  div.append(h2, img)

  const characters = document.querySelector(".characters")
  div.append(section);
}
 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(BASE_URL)
  .then(data => data.json())
  .then((json) => {
      generateNewCharacter(json)

    })

})