// array

const myArr = [1, 3, 5, 6]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 4, 5, 7, 9)
// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(9)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift(8)
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.includes(3));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


// splice manipulated original Array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);











