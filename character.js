
 const getCharacter = () => {
  let dropdown = document.querySelector(".dropdown")
    // const randomIndex = Math.floor(Math.random() * 42);
    for (i =0; i < 43; i++){
     fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
       .then((response) => response.json())
       .then((data) => {
        data.results.forEach(character => {
          // console.log(character)
          let tag = document.createElement("option")
          tag.innerText = character.name
          tag.value = character.id
          dropdown.append(tag)
          
      });
      
    })
  }
  
      dropdown.addEventListener("change", (event) => {
        event.preventDefault();
    
        fetch(`https://rickandmortyapi.com/api/character/${dropdown.value}`).then(response => response.json()).then(character => {
            console.log(character)
         let characterCard = document.querySelector("#character-card");
         characterCard.innerHTML = `
           <img id="character-img" src="${character.image}" alt="Character">
           <p id="character-name">Name: ${character.name}</p>
           <p id="character-status">Status: ${character.status}</p>
           <p id="character-gender">Gender: ${character.gender}</p>
          <p id="character-origin">Origin: ${character.origin.name}<p>
         `;
         characterCard.classList.add("spin");
      })
       });
      };
      
       document.addEventListener("DOMContentLoaded", (event) => {
        event.preventDefault();
      getCharacter();
    });
  