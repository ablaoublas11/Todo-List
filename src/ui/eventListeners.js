export function initEventListeners(appController){
    const taskListContainer = document.querySelector(".main-content");

    taskListContainer.addEventListener("click", (e) => {
        const btn = e.target.closet('[data-action]');
        if (!btn) return;
        if(btn.dataset.action === "add-todo"){
            appController.createTodo(todoInput=[]);
        }
    });
}