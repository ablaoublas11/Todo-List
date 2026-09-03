export function renderTodo(todoList){
    const container = document.querySelector(".todos-container");
    container.innerHTML = "";
    const template = document.querySelector("#task-template");

    
    const clone = template.content.cloneNode(true);
    clone.querySelector(".task-check").dataset.id = todoList.id;
    clone.querySelector('.task-name').textContent = todoList.title;
    clone.querySelector('[data-action="delete-todo"]').dataset.id = todoList.id;
    container.append(clone);

}

//πρέπει στον appContreller να στέλνω ολόκληρη την λίστα με τα todos ώστε αυτο να κάνει re-render