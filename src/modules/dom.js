import { createTask } from "./events";

export function createTaskForm() {

    const addFormTo = document.querySelector('.content')

    const closeButton = document.createElement('button')
    closeButton.type = "button"
    closeButton.textContent = "X"
    closeButton.classList.add("form-close-btn")

    if (document.querySelector(".task-form")) {
        return;
    }

    const form = document.createElement("form");

    const formContainer = document.createElement("div");
    formContainer.classList.add("task-form");


    const titleInput = document.createElement('input')
    titleInput.placeholder = "Title"
    titleInput.required = true
    titleInput.type = "text"
    titleInput.id = "task-title"


    const descriptionInput = document.createElement('textarea')
    descriptionInput.placeholder = "Description"
    descriptionInput.required = true
    descriptionInput.id = "task-description"


    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "task-due-date";
    dueDateInput.required = true;

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.id = "task-project";
    projectInput.placeholder = "Project";

    const addButton = document.createElement("button");
    addButton.id = "add-task-btn";
    addButton.textContent = "Add Task";
    addButton.type = 'submit'

    form.append(closeButton, titleInput, descriptionInput, dueDateInput, projectInput, addButton);
    formContainer.appendChild(form)

    addFormTo.appendChild(formContainer)

    form.addEventListener('submit', (e) => {

        e.preventDefault();


        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const project = projectInput.value.trim();

        createTask(title, description, dueDate, project);
    })



    closeButton.addEventListener('click', ()=>{
        formContainer.remove()
    })

}



