
let currentCharacter;
let score = 0;

//create an array of species
const species = ["Alien", "Human", "Mythological", "Robot", "Humanoid"];

//create a function that gets a random character from the API
const getRandomCharacter = () => {
 const randomIndex = Math.floor(Math.random() * 42);
   fetch(`https://rickandmortyapi.com/api/character/?page=${randomIndex}`)
    .then((response) => response.json())
    .then((data) => {
      //store the data in a variable
      const characters = data.results;
      //get a random index
      const randomCharacterIndex = Math.floor(Math.random() * characters.length);
      //get the character at the random index
      currentCharacter = characters[randomCharacterIndex];
      //update the character card
      const characterCard = document.querySelector("#character-card");
      characterCard.innerHTML = `
        <img id="character-img" src="${currentCharacter.image}" alt="Character">
        <p id="character-name">${currentCharacter.name}</p>
        <p id="character-status">${currentCharacter.status}</p>
        <p id="character-gender">${currentCharacter.gender}</p>

      `;
      characterCard.classList.add("spin");
    });
};
//create a function to display the "Incorrect!" alert with a button to close it
const showIncorrectAlert = () => {
    const alertContainer = document.createElement("div");
    alertContainer.id = "alert-container";
    alertContainer.innerHTML = `
      <div id="alert">
        <p>Incorrect!</p>
        <button id="close-alert-btn">&times;</button>
      </div>
    `;
    document.body.appendChild(alertContainer);
    //add event listener to the close button to remove the alert when clicked
    document.querySelector("#close-alert-btn").addEventListener("click", () => {
      document.querySelector("#alert-container").remove();
    });
  };
//create a function that creates buttons for each species
const createSpeciesButtons = () => {
  const buttonContainer = document.querySelector("#button-container");
  species.forEach((species) => {
    const button = document.createElement("button");
    button.textContent = species;
    button.addEventListener("click", (event) => {
        event.preventDefault();
      //check if the selected species is the same as the current character's species
      if (species.toLowerCase() === currentCharacter.species.toLowerCase()) {
        alert("Correct!");
        score++;
        document.querySelector("#score").textContent = score;
      } else {
        showIncorrectAlert();
      }
      //get a new random character
      getRandomCharacter();
    });
    buttonContainer.appendChild(button);
  });
};

//get a random character and create the species buttons on page load
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
  getRandomCharacter();
  createSpeciesButtons();
});
