export function renderTodoDetails(task){
    console.log(task);
    const container = document.querySelector(".details-container");
    const template = document.querySelector("#task-details");

    const clone = template.content.cloneNode(true);
    clone.querySelector('.detail-card').dataset.id = task.id;
    clone.querySelector('.detail-task-name').textContent = task.title;
    clone.querySelector('.description').textContent = task.description;
    clone.querySelector('.notes').textContent = task.notes;
    clone.querySelector('.creation-date').textContent = task.creationDate;
    clone.querySelector('.expire-date').textContent = task.expireDate;
    clone.querySelector('.priority').textContent = task.priority;
    clone.querySelector('[data-action="delete-todo"]').dataset.id = task.id;
    container.append(clone);
}