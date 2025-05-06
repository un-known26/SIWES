function callback(currentYear, yearOfBirth) {
    console.log("Fun fact: the current year minus the year you were born is your age");
    let formula = currentYear - yearOfBirth;
    return formula
}

function calling(currentAge) {
    console.log("Your age is",currentAge);
}

let age = callback(2025, 2005);

calling(age);