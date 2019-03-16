// jshint esnext : true

// let cars = ['BMW', 'CITY', 'NANO' , 'AUDI']
// let CARS = 'HONDA CITY'

// for (let i of cars){
//     console.log(i)
// }

// for (let i of CARS){
//     console.log(i)
// }


function deposit(...money){
    let balance = 0
    for (let index = 0; index < money.length; index++) {
        balance += money[index]
    }
    return balance
}

console.log(deposit(100, 40 , 50 , 70))


let addMoney =[34,235,25,53,23,23,23,23.435,23,32]
console.log(Math.max(...addMoney))
