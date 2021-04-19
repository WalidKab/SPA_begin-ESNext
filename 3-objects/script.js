//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

for(let i=0; i<Object.keys(bus).length; i++){
    if(i!==4){
        console.log(Object.keys(bus)[i]+ ' : ' + Object.values(bus)[i])
    }
}

//3.2 Object.values

Object.values(data).forEach(key=>console.log(key.texte))

console.log(data);
