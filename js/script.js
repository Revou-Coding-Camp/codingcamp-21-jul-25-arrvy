console.log("Hello, World");

let Task=[];
console.log(taskList);

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
    renderTask();
    
    }
    
}
function removeAllTask(){

}
function renderTask(){
    const taskList=document.getElementById("list-container");
    taskList.innerHTML="";

    Task.forEach((task,index) =>{
        taskList.innerHTML += `
        <li class = "list-element">
            <button class="button" id="check-button" hidden></button>
                <label for="check-button"><img src="svg/circle_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt=""></label>

            <table class="list-element-table">
                <td class="list-element-name">${task.title}</td>
                <td>|</td>
                <td class="list-element-date">${task.date}</td>
            </table>

            <button class="button" id="delete-task" hidden>delete</button>
                <label for="delete-task"><img src="svg/delete_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" alt=""></label>
        </li> 
        
        `;
    });

}
function completeTask(){

}
function deleteTask(){
    
}
function toggleFilter(){

}
