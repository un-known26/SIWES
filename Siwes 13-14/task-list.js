let input = document.getElementById("new-task");
let addButton = document.getElementById("add-button");
let taskList = document.getElementById("task-list");


function addTask(taskText) {
    let list = document.createElement("li");
    list.innerHTML = taskText;
    taskList.appendChild(list);

    // Delete Button
    let del = document.createElement("button");
    del.innerHTML = "Delete";
    list.appendChild(del);
    del.addEventListener("click", function clear() {
        taskList.removeChild(list);
    }, true);

    //Completed Task
    list.addEventListener("click", function() {
        list.classList.toggle("completed");
    }, true);

    //localStorage.setItem("task-list", "list")
}

    //Adding a new task to the list
addButton.addEventListener("click", function save(){
    let newTask = input.value;
    if (newTask !== "") {
        addTask(newTask);
    }
});




