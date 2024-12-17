// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId);

let bigNumber = 345678903456789n;

// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "jyoti",
    age: 10,
    isPerson: true
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);



