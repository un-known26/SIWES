const fruits = ["apple",
"banana", "orange", "mango"]
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits.length);

fruits[1] = "pear";
console.log(fruits);

//Part 2
fruits.push("grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);


//Part 3
let index = fruits.indexOf("orange");
console.log(index);

let include = fruits.includes("banana");
console.log(include);

let slice = fruits.slice(1, 3);
console.log(slice);


//Part 4
fruits.forEach(fruit => console.log(fruit));

let map = fruits.map(fruit => fruit.toUpperCase());
console.log(map);

let startWithA = fruits.filter(fruit => fruit.startsWith("a"));
console.log(startWithA);


//Part 5
let alphabetical = fruits.sort();
console.log(alphabetical);

let reverse = fruits.reverse();
console.log(reverse);

let join = fruits.join(", ");
console.log(join);


// Bonus Quest
const numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((total, value) => total + value);
console.log(sum);