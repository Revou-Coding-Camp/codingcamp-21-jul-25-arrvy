console.log("Hello, World");

let Task=[];


function addTask(){
    const taskInput = document.getElementById("task-name");
    const dateInput = document.getElementById("task-date");

    if(taskInput.value === ""||dateInput.value === ""){
        alert("please, enter task and the date");
    }else{
    Task.push({
        title : taskInput.value,
        date : dateInput.value,
        complete : false
    })
    console.log(Task);
    taskInput.value = "";
    dateInput.value = "";
    saveTasks(); // Save tasks to localStorage
    renderTask();
    
    }
    
}
function removeAllTask(){
    Task = [];
    saveTasks();
    renderTask();
}
function renderTask(){
    const taskList=document.getElementById("list-container");
    taskList.innerHTML="";

    Task.forEach((task,index) =>{
        const checkboxId = `check-button-${index}`;
        taskList.innerHTML += `
        <li class = "list-element">
        <input type="checkbox" class="button" id="${checkboxId}" ${task.complete ? "checked" : ""}></input>                
                <label id= "custom-checkbox" for="${checkboxId}" onchange="completeTask(${index})">
                    <img class="custom-checkbox-svg" src="svg/circle_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                </label>

            <table class="list-element-table">
                <td class="list-element-name">${task.title}</td>
                <td>|</td>
                <td class="list-element-date">${task.date}</td>
            </table>

            <button class="button" id="delete-task" hidden onclick="deleteTask(${index})">delete</button>
                <label for="delete-task"><img src="svg/delete_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt=""></label>
        </li> 
        
        `;
    });

}
function completeTask(index){
     if (Task[index].complete === false) {
         console.log("Checked");
         Task[index].complete = true;
     }
     else{
        console.log("Unchecked");
        Task[index].complete = false;

     }

        saveTasks(); // Save tasks to localStorage

}
function deleteTask(index){
    Task.splice(index,1);
    saveTasks(); // Save tasks to localStorage
    renderTask();
    
}
 
function toggleFilter() {
    const filterValue = document.getElementById("filter").value;
    const taskList = document.getElementById("list-container");
    taskList.innerHTML = "";

    let filteredTasks = Task;
    if (filterValue === "complete") {
        filteredTasks = Task.filter(task => task.complete);
    } else if (filterValue === "incomplete") {
        filteredTasks = Task.filter(task => !task.complete);
    }

    filteredTasks.forEach((task, index) => {
        const checkboxId = `check-button-${index}`;
        taskList.innerHTML += `
        <li class="list-element">
            <input type="checkbox" class="button" id="${checkboxId}" ${task.complete ? "checked" : ""} onchange="completeTask(${index})">
            <label for="${checkboxId}">
                <img class="custom-checkbox-svg" src="svg/circle_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt="">
            </label>
            <table class="list-element-table">
                <td class="list-element-name">${task.title}</td>
                <td>|</td>
                <td class="list-element-date">${task.date}</td>
            </table>
            <button class="button" id="delete-task" hidden onclick="deleteTask(${index})">delete</button>
            <label for="delete-task"><img src="svg/delete_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt=""></label>
        </li>
        `;
    });
}


function saveTasks() {
    localStorage.setItem("todo-tasks", JSON.stringify(Task));
}

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem("todo-tasks");
    if (saved) {
        Task = JSON.parse(saved);
    }
}


// Call loadTasks() when the page loads
window.onload = function() {
    loadTasks();
    renderTask();
};