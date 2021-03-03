//Objects

var emptyObject = {}

var stooge= {
    "first-name": "Jerome",
    "last-name": "Howard"
}

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}

console.log(stooge["first-name"]) // Jerome
console.log(flight.number) // 815

console.log(stooge["middle-name"]) //undefined

console.log(flight.equipment) //undefined
// console.log(flight.equipment.model) //throws "TypeError"
console.log(flight.equipment && flight.equipment.model) //undefined

//||
console.log(flight.equipment || "(none)") //

//Update done by assignment
stooge["middle-name"] = "Lester"
stooge.nickname = "Curly"

console.log(stooge["middle-name"]) //Lester
console.log(stooge.nickname) //Curley

//Objects are passed by reference - never copied

var x = stoogex.nickname = "Curly"
var nick = stooge.nickname//Nick is "Curly" as x & stooge are references to the same object

var a = {}, b = {}, c={}
// a, b & c each refer to a different empty object

a = b = c = {}
//a, b & c each refer to the same empty object