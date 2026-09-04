export function renderTodo(todoList){
    const container = document.querySelector(".todos-container");
    container.innerHTML = "";
    const template = document.querySelector("#task-template");

    todoList.forEach( todo => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".task-check").dataset.id = todo.id;
        clone.querySelector('.task-name').textContent = todo.title;
        clone.querySelector('[data-action="show-more"]').dataset.id = todo.id;
        clone.querySelector('[data-action="delete-todo"]').dataset.id = todo.id;
        container.append(clone);
    });
}

//πρέπει στον appContreller να στέλνω ολόκληρη την λίστα με τα todos ώστε αυτο να κάνει re-render