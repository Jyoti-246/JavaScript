// falsy values

// false, 0 , -1, BigInt 0n, "", null, undefined, NaN 

// truthy values 

// "0", "false", " ", [], {}, function(){}
 
let username = ["j", "y", "o", "t", "i"];

if(username.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("obj is empty");
}

// Nullish Coalescing Operator (??): null  undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 30 ?? 20

// console.log(val1);

// Terniary Operator

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
;



