//Modifying the h1 tag
let main = document.getElementsByTagName("h1")[0];
main.innerHTML="Welcome to DOM Manipulation";
main.style.color = "cadetblue";

//Modifying the p tag
let intro = document.getElementById("intro-paragraph");
intro.append(" i'm learning to change this with JavaScript!");
intro.style.fontSize = "2rem";

//Modifying the image
let image = document.getElementById("dynamic-image");
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRil96XoARAJXNHrpOFiP_DzxwSyJ3GHj7n0A&s";
image.alt = "A Haikyuu Poster";
image.style.border = "1px solid green";

//Part 2: Event Handling
//Text Button
let buttonT = document.getElementById("change-text-button");
buttonT.style.fontSize = "1.5rem";
buttonT.addEventListener("click", changeText);

function changeText() {
    intro.innerHTML = "The text has been updated by clicking the button";
}

//Toggle-Image-Button
let buttonTI = document.getElementById("toggle-image-button");
buttonTI.style.fontSize = "1.5rem";
buttonTI.addEventListener("click", toggleImage);

function toggleImage() {
    if(image.style.visibility === "hidden") {
        image.style.visibility = "visible";
    } else{
        image.style.visibility = "hidden";
    }
}

//Styling <li> tags
let item = document.getElementsByTagName("li");
for(let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", changeBackGround);
}

function changeBackGround() {
    if(this.style.backgroundColor === "blue") {
        this.style.backgroundColor = "";
    } else {
        this.style.backgroundColor = "blue";
    }
}


//Part 3: Creating New Elements
let newInput = document.createElement("input");
newInput.type = "text";
newInput.id = "new-item-input";
newInput.width = "40%";
newInput.height = "10px";

let addButton = document.createElement("button");
addButton.id = "add-item-button";
addButton.innerHTML = "Add Item";
addButton.style.fontSize = "1.5rem";

let container = document.getElementById("main-container");
container.appendChild(newInput);
container.appendChild(addButton);

//Adding a new list 
addButton.addEventListener("click", add);

function add() {

    if(newInput.value === "") {
        
    } else {
        let newList = document.createElement("li");
        newList.innerHTML = newInput.value;

         let theList = document.getElementsByTagName("ul")[0];
        theList.appendChild(newList);

        newInput.value = "";

        //Changing the new list's background color
        newList.addEventListener("click", function added() {
            if(newList.style.backgroundColor === "blue"){
                newList.style.backgroundColor = "";
            } else{
                newList.style.backgroundColor = "blue";
            }
        });

    }

}

//Part 3.2: Dynamic Container Box
let box = document.createElement("div");
box.id = "content-area";
container.append(box);

let boxButton = document.createElement("button");
boxButton.id = "generate-content-button";
boxButton.innerHTML = "Generate Content";
boxButton.style.fontSize = "1.5rem";
box.appendChild(boxButton);
boxButton.addEventListener("click", generate);

function generate() {
    //Getting current Date/Time
    let now = new Date();
    let todaysDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    let currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    let paragraph = document.createElement("p");
    paragraph.innerHTML = `This is dynamically generated content! Timestamp: Date ${todaysDate}  |  Time ${currentTime}`;

    box.appendChild(paragraph);
}
