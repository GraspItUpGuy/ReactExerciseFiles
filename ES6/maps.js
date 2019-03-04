// jshint esnext:true

let pikachu ={ 
    name : 'I am Pikachu',
    power : "I can electrify",
}
let charmander ={ 
    name : 'I am Charmander',
    power : "I can throw fire",
}
let squirtel ={ 
    name : 'I am squirtel',
    power : "I can throw water",
}

let pokemon = new Map();
pokemon.set('pika', pikachu)
pokemon.set('char', charmander)
pokemon.set('squ', squirtel)

console.log(pokemon.size)
console.log(pokemon.get('char'))
console.log(pokemon.keys())



for (key of pokemon.keys()){
    console.log(key)
}

for (key of pokemon){
    console.log(key)
}