//4.1 Découverte

//Création d'un tableau et qui pour paramètre a et b qui désignent les 2 premiers éléments du tableau
const [a, b, c] = [1, 2, 3, 4]; 
console.log(a); //console.log du 1er élément du tableau
console.log(b); //console.log du 2ème élément du tableau
console.log(c);

//Création d'un objet qui a comme paramètre first et last et 3 propriétés
const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);

//4.2 Application
const values= Object.values(data)

const newObject= {
        id : 74000,
        texte: 'Ceci est un texte',
        dateDebut: '07/01/2019 05:20',
        dateFin: '31/12/2050 23:59',
}

const defaultObj={
        latitude: 0,
        longitude: 0,
        weekEnd: 0,
}

function add(objet){
    const objetFinal={...defaultObj, ...objet}
    data[objetFinal.id]=objetFinal;
}

add({weekEnd : 3, id:105006})
add(newObject)


for(let i=0; i<values.length; i++){
    const {texte, dateDebut, dateFin} = values[i];
    console.log(texte, dateDebut, dateFin)
}
console.log(data);

test = (...param) => {
    for (let i=0;i<param.length;i++){
        console.log(param[i])
    }
}
test('1','2','3','4')