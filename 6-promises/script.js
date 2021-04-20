// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second() {
  return sleep(100).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

//first().then(secondWithError).catch(console.error).then(third);

// 2.1
function getSpecies(species) {

  const fetchHuman = fetch("https://swapi.dev/api/species/"+ species +"/");

  return fetchHuman
      .then(response => {
    return response.json()
  })
       .then(species => {
     console.log(species)
     return species
  })
}

getSpecies(1)

// 2.2

function getPeople(specie,char){                // (objet,quel personnage)
  return fetch(specie.people[char])
      .then(response => {
        return response.json()
      })
      .then(character => {
        console.log(character)
      })
}

// getSpecies(1).then(response => getPeople(response,2))

// 2.3

function getAllPeople(specie) {
  return getSpecies(specie)
      .then(table => {
        // console.log(table.people)
        return table.people
      })
}

getAllPeople(1)
    .then(results => {
      const list = results.map((url)=>{
        return fetch(url)
            .then(response => {
              return response.json()})
            .then(character => {
              return character.name
            })
      })
      Promise.all(list).then(response => {
        console.log(response)
      })
    })