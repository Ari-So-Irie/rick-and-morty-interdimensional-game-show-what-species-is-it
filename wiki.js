let cardContainer = document.querySelector("#card-container")
for (let i = 1; i < 43; i++){
fetch(`https://rickandmortyapi.com/api/character/?page=${i}`).then(response => response.json()).then(data => {
    // console.log(data.results)
    data.results.forEach(character => {
        // console.log(character)
        let tag = document.createElement("div")
      tag.setAttribute("id", "character-card");
        tag.innerHTML = `<img id="character-img" src="${character.image}" alt="Character">
        <p id="character-name">${character.name}</p>
        <p id="character-status">${character.status}</p>
        <p id="character-gender">${character.gender}</p>
       <p id="character-origin">${character.origin.name}<p>
       <p id="character-species">${character.species}<p>
      `;
       cardContainer.prepend(tag)
    });
})
}
// cardContainer.addEventListener("change", (e) => {
// fetch(`https://rickandmortyapi.com/api/character/${cardContainer.value}`).then(response => response.json()).then(character => {
//     data.results.forEach(character => {
//         let characterCard = document.querySelector("#character-card");
//                 characterCard.innerHTML = `
//                   <img id="character-img" src="${character.image}" alt="Character">
//                   <p id="character-name">${character.name}</p>
//                   <p id="character-status">${character.status}</p>
//                   <p id="character-gender">${character.gender}</p>
//                  <p id="character-origin">${character.origin.name}<p>
//                  <p id="character-species">${character.species}<p>
//                 `;
//         // let card = document.querySelector(".character-card")
//         // card.innerHTML = ""


//         // let name = document.createElement("h3")
//         // name.textContent = character.name
//         // card.append(name)

//         // let status = document.createElement("p")
//         // status.textContent = character.status
//         // card.append(status)

//         // let species = document.createElement("p")
//         // species.textContent = character.species
//         // card.append(species)

//         // let origin = document.createElement("p")
//         // origin.textContent = character.origin.name
//         // card.append(origin)
//     })
// })
// })