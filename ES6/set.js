

let marvel = new Set(['Batman', 'Flash', 'Batman']);

marvel.add('Superman');
marvel.add('Superman');
marvel.add('Hulk');
console.log(marvel)

for (m of marvel){
    console.log(m)
}


console.log(marvel.has('wonderwoman'))