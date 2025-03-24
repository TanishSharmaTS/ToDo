export class Task{

    constructor(title, description, dueDate, project, completed){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.project = project,
        this.completed = completed
    }
}


export const tasks = {
    task1 : new Task("Buy groceries", "Get milk, eggs, and bread", "2025-03-05", "Personal", false),
    task2 : new Task("Complete project report", "Finalize and submit the report", "2025-03-10", "Work", true),
    task3 : new Task("Workout", "Go for a 30-minute run", "2025-03-03", "Health", false),
    task4 : new Task("Read a book", "Read 50 pages of a novel", "2025-03-06", "Personal", false),
    task5 : new Task("Fix bug in to-do app", "Resolve the issue with task deletion", "2025-03-04", "Development", false),
}