const BASE_URL = "https://rickandmortyapi.com/api/character/1";

const button = document.querySelector("button");

function generateNewCharacter({results}) {
  const newCharacter = results;
  const section = document.createElement("section");
  
  const img = document.createElement("img");
  img.setAttribute("src", newCharacter.image);
  
  const h2 = document.createElement("h2");
  h2.textContent = newCharacter.name;

  section.append(img,h2)
  document.querySelector(".characters").append(section);
}


button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${BASE_URL}`)
    .then(data => data.json())
    .then(json => generateNewCharacter(json))
    .catch(displayErr);
})


showCharacter = (character) => {
  document.getElementById('id').innerText = 
  `${showCharacter.results[0].name.img}`
  console.log(character)
}