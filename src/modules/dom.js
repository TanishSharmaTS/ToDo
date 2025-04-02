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


export function showTaskEditForm(taskItem) {
    const addFormTo = document.querySelector('.content');
    const editTaskForm = document.createElement('form');
    editTaskForm.classList.add('edit-form');

    const closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.classList.add('form-close-btn');
    closeButton.type = "button"; 

    if(document.querySelector('.edit-form-container')){
        document.querySelector('.edit-form-container').remove()
    }

    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-form-container"); 

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Title";
    titleInput.required = true;
    titleInput.type = "text";
    titleInput.id = "task-title";
    titleInput.value = taskItem.title;

    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = "Description";
    descriptionInput.required = true;
    descriptionInput.id = "task-description";
    descriptionInput.value = taskItem.description || ""; 

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "task-due-date";
    dueDateInput.required = true;
    dueDateInput.value = taskItem.dueDate;

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.id = "task-project";
    projectInput.placeholder = "Project";
    projectInput.value = taskItem.project || ""; 

    const editButtonContainer = document.createElement('div');
    editButtonContainer.classList.add('edit-button-container');

    const saveChangesButton = document.createElement("button");
    saveChangesButton.classList.add('edit-form-buttons')
    saveChangesButton.id = "save-task-changes-btn";
    saveChangesButton.textContent = "Save Changes"; 
    saveChangesButton.type = 'submit';
    saveChangesButton.name = 'action';
    saveChangesButton.value = 'save';

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add('edit-form-buttons')
    deleteTaskButton.id = "delete-task-btn";
    deleteTaskButton.textContent = "Delete Task";
    deleteTaskButton.type = 'button'; 
    deleteTaskButton.name = 'action';
    deleteTaskButton.value = 'delete';

    editButtonContainer.append(saveChangesButton, deleteTaskButton);
    editTaskForm.append(closeButton, titleInput, descriptionInput, dueDateInput, projectInput, editButtonContainer);
    formContainer.appendChild(editTaskForm);
    addFormTo.appendChild(formContainer);

    closeButton.addEventListener('click', () => {
        formContainer.remove();
    });

    deleteTaskButton.addEventListener('click', () => {
        deleteTask(taskItem);
        formContainer.remove();
        renderUi();
    });

    editTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveTaskChanges(
            taskItem, 
            titleInput.value, 
            descriptionInput.value, 
            dueDateInput.value, 
            projectInput.value
        );
        formContainer.remove();
        renderUi();
    });
}

function saveTaskChanges(taskItem, titleInput, descriptionInput, dueDateInput, projectInput) {
    taskItem.title = titleInput;
    taskItem.description = descriptionInput;
    taskItem.dueDate = dueDateInput;
    taskItem.project = projectInput;
}

function deleteTask(taskItem) {
    for (const key in tasks) {
        if (tasks[key] === taskItem) {
            delete tasks[key];
            break;
        }
    }
}

export function createProjectItems(projectList){

    const projectContainer = document.querySelector('.nav-projects')

    for(let i = 0; i<projectList.length; i++){
        const individualProjects = document.createElement('div')
        individualProjects.classList.add('individual-projects')
        individualProjects.textContent = projectList[i]
        projectContainer.appendChild(individualProjects)
    }

}


