import {tasks} from "./tasks";
import { addTasks } from "./events";

const content = document.querySelector(".content")


function displayTasks(){

    Object.values(tasks).forEach(task =>{
        createTaskCards(task)
    })
    
}

function createTaskCards(task){

    const { title,dueDate, completed } = task


    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")

    const taskTitle = document.createElement("h3")
    taskTitle.classList.add("task-title")
    taskTitle.textContent = title

    const taskLeftSide = document.createElement('div')
    taskLeftSide.classList.add('left-task-items')


    const taskDueDate = document.createElement("p")
    taskDueDate.classList.add("task-dueDate")
    taskDueDate.textContent = dueDate

    const taskComplete = document.createElement("input")
    taskComplete.type = "checkbox"
    taskComplete.checked = completed
    taskComplete.classList.add("task-checkbox")


    taskLeftSide.append(taskComplete, taskTitle)
    taskContainer.append(taskLeftSide, taskDueDate)
    content.appendChild(taskContainer)



    taskComplete.addEventListener('click', ()=>{
        task.completed = togleComplete(task.completed)
    })

}


function togleComplete(completionStatus){
    
    return completionStatus == true ? false : true
}


function clearTasks(){

    content.innerHTML = ''
    
}


export function renderUi(){
    clearTasks()
    displayTasks()
    addTasks()
}