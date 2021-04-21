
async function main() {
  console.log("- 1 - START of main function");

  // il n'est pas possible d'utiliser await en dehors d'une fonction async
  // vous devez donc appeler les fonctions que vous allez écrire ci dessous

  // wait 100 ms
  console.log("- 2 - BEFORE await");
  await new Promise( resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

console.log("= a = BEFORE main call");
main();
console.log("= b = AFTER main call");

async function getSpecies(species) {
  const fetchHuman = await fetch("https://swapi.dev/api/species/"+ species +"/");
  const humanOk = await fetchHuman.json()

  console.log(humanOk)
  return humanOk
}

getSpecies(1);

async function getPeople(specie,char){ 
  const findSpecies = await getSpecies(specie);
  const findPeople = await fetch(findSpecies.people[char]);
  const peopleOk = await findPeople.json();

  console.log(peopleOk)
}

getPeople(1,3)

async function getAllPeople(specie) {
  const findSpecies = await getSpecies(specie);
  const findPeople = await findSpecies.people
  .map(async displayName => {
    const fetchName = await fetch(displayName);
    const nameFind = await fetchName.json()
    console.log(nameFind.name)
  })

  console.log(findPeople)
}
getAllPeople(1)