// String
let studentName = "Chukwuebuka";

// Number
let studentAge = 19;

//Boolean
let isEnrolled = true;

//Const
const courseName = "JavaScript Fundamentals";

//Const
const assignmentTopic = "Variables, Data Types, Functions, Objects";

//Printing Student Details
console.log("Student Name:",studentName);
console.log("Student Age:",studentAge);
console.log("Enrollment Status:",isEnrolled);
console.log("Course Name:",courseName);
console.log("Assignment Topics:", assignmentTopic);

//Reassigning some variables
studentAge = 18;
isEnrolled = false;
console.log(" ");
console.log("New student Age:", studentAge);
console.log("Enrollment Status:",isEnrolled);

// courseName = "Advanced JavaScript";
//console.log("New Course Name: ", courseName);
// courseName couldn't be changed because the "const" datatype doesn't suport such action.

let favouriteNumber = 26;
let favouriteSaying = "(In Ben Tennyson's voice) It's Hero Time!";
let hasPet = false;
let nothing = null;
let notDefined;

console.log(" ");
console.log("Favourite Number:",favouriteNumber);
console.log('Favourite Saying is"',favouriteSaying,'"');
console.log("Pet: ",hasPet);
console.log("Value of Nothing:",nothing);
console.log("Not Defined is",notDefined);
console.log(" ");

//Part 2: Functions
function greetStudent(name){
    console.log("Hello",name);
}

greetStudent("Chukwuebuka");

function calculateSum(num1, num2){
    sumResult = num1 + num2;
    return sumResult;
}

let numberA = 7;
let numberB = 9;
calculateSum(numberA, numberB);
console.log("Result:",sumResult);
console.log(" ");

const multiplyNumbers = (numberA, numberB) => numberA * numberB;
console.log(multiplyNumbers(numberA, numberB));
console.log(" ");

//Part 3: Objects
const book = {
    title : "Merlin",
    author : "Author Pendragon",
    pages : 1000,
    isFiction : true,
    genre : "Science Fiction",
    displayInfo : function() { 
        console.log("Title:",book.title,", Author:",book.author,", No of Pages:",book.pages,", Fiction:",book.isFiction,", Genre:",book.genre);
    }
};
console.log(book.title);
console.log(book["author"]);
console.log(" ");

//changing book properties
book.pages = 500;
console.log("Using a Method To Print The Book Details")
console.log(book.displayInfo());
console.log(" ");

console.log("Printing The Entire Object Without The Use of a Method");
console.log(book);

//Part 4: The Optional Challenge
function printStudentInfo(name, age, isEnrolled) {
    const student = {
        studentName : name,
        studentAge : age,
        enrollmentStatus : isEnrolled,
    }
    console.log("The students name is",student.studentName,", he is",student.studentAge,"years old, and his enrollment status is",student.enrollmentStatus,".");
}
printStudentInfo("Chukwuebuka", 26, true);

