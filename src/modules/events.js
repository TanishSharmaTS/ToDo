import { createTaskForm } from "./dom"
import { Task } from "./tasks"
import { tasks } from "./tasks"
import { renderUi } from "./ui"


export function addTasks() {
    const addTaskBtn = document.querySelector(".add-task")


    addTaskBtn.addEventListener('click', () => {
        createTaskForm()
    })
}


const getNextTaskKey = () => {
    const taskKeys = Object.keys(tasks).sort();
    if (taskKeys.length === 0) return "task1";

    const lastTaskKey = taskKeys[taskKeys.length - 1];
    const lastTaskNumber = parseInt(lastTaskKey.replace("task", ""), 10);
    return `task${lastTaskNumber + 1}`;
};


export function createTask(titleInput, descriptionInput, dueDateInput, projectInput) {
    const completed = false


    const newTask = new Task(titleInput, descriptionInput, dueDateInput, projectInput, completed)


    addTasktoList(newTask)
}

function addTasktoList(newTask) {
    const newTaskKey = getNextTaskKey();

    tasks[newTaskKey] = newTask

    renderUi()

}


export function addProjects() {

    const addProjectBtn = document.querySelector('.add-project-btn')


    addProjectBtn.addEventListener('click', () => {
        displayAddProjectForm()
    })
}


function displayAddProjectForm() {

}