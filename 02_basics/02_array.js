const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// concat does not change original array and in concat we can take only 2 arrays to concat
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// ... (spread operator)
// in this way we can take more then two arrays and combine them
// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("jyoti"));
console.log(Array.from("jyoti"));
console.log(Array.from({name: "jyoti"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
