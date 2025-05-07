function findUniqueElements(array) {
    const another = new Set(array);

    return Array.from(another);
}

const colors = ["red", "blue", "green", "black", "blue", "red"];

const human = [{firstName:"Danny", lastName:"Phantom"}, {firstName:"Robin", lastName:"DaBank"}, 
    {firstName:"Robin", lastName:"DaBank"}];

console.log(findUniqueElements(colors));
//console.log(findUniqueElements(human));




// Set Operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

function union(setA, setB) {
    let united = new Set(setA);
    for(let item of setB) {
        united.add(item);
    }
    return united;
}
console.log(union(setA, setB));


function intersection(setA, setB) {
    let twin = new Set();

    for( let item of setA) {
        if(setB. has(item)) {
            twin.add(item);
        }
    }
    return twin;
}

console.log(intersection(setA, setB));


// Maps
function  countWordFrequency(text) {
    text = text.toLowerCase();
    const words = text.split(' ');
    const wordMap = new Map();

    for(let word of words) {
        if(wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }
    return wordMap;
}
let stringOfTexts = "I am finally done with this assignment so i can sleep";
console.log(countWordFrequency(stringOfTexts));