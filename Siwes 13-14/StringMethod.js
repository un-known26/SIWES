let myString = "JavaScript is awesome!";

let length = myString.length;
console.log(length);

let met1 = myString.charAt(0);
let met2 = myString[7];
console.log("The character at index 0 is ", met1, "and the character at index 7 is ", met2);

// Part 2: String Manipulation
let extraText = "It's so powerful!";
let joined = myString.concat(" and ", extraText);
console.log(joined);

let upper = myString.toUpperCase();
let lower = myString.toLowerCase();
console.log(upper);
console.log(lower);

let extract1 = myString.slice(0, 9);
let extract2 = myString.substring(14, 20);
let extract3 = myString.substr(11, 20);
console.log(extract1);
console.log(extract2);
console.log(extract3);

//Part 3: Searching and Replacing
let index = myString.indexOf("is");
let index2 = myString.lastIndexOf("awesome");
let check = myString.includes("powerful");
console.log(index);
console.log(index2);
console.log(check);

let replaced = myString.replace("awesome", "fantastic");
let replaceAll = replaced.replaceAll("a", "A");
console.log(replaceAll);


//Part 4: Trim and Pad
let stringWithSpace = "Hello, World!";
let noSpace = stringWithSpace.trim();
console.log(noSpace);

let myNumber = "5";
let pStart = myNumber.padStart(4, "0");
let pEnd = myNumber.padEnd(6, "*");
console.log(pStart);
console.log(pEnd);


//Part 5: Splitting Strings
let array = myString.split(" ");
console.log(array);


//Bonus
function reverse(backwards) {
    let string;
    for(i = backwards.length; i >= 0; i--) {
        string += backwards[i];
    }

    return string;
}

let reversedString = reverse(extraText);
console.log(reversedString);

