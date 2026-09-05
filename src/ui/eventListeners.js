export function initEventListeners(appController) {
  const taskListContainer = document.querySelector(".main-content");

  taskListContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    switch (btn.dataset.action) {
      case "new-task":
        document.querySelector(".form-container").classList.toggle("is-open");
        break;
      case "new-project":
        document
          .querySelector(".form-project-container")
          .classList.toggle("is-open");
        break;
      case "btn-submit-project":
        document
          .querySelector(".form-project-container")
          .classList.toggle("is-open");
        break;
    }
  });

  const taskForm = document.querySelector("#todo-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".form-container").classList.toggle("is-open");

    const inputTask = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      notes: document.querySelector("#notes").value,
      expireDate: document.querySelector("#due-date").value,
      priority: document.querySelector("#priority").value,
    };

    appController.createTodo(inputTask);
    taskForm.reset();
  });

  //εδώ πιάνουμε το event για το show-more και delete button
  const taskCard = document.querySelector(".todos-container");
  taskCard.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const taskId = btn.dataset.id;
    switch (btn.dataset.action) {
      case "show-more":
        appController.renderTaskDetails(taskId);
        document
          .querySelector(".details-container")
          .classList.toggle("is-open");
        break;
      case "delete-todo":
        appController.deleteTodo(taskId);
        break;
    }
  });

  //εδώ πιάνουμε το event για το close, edit και delete button στο details-container
  const detailCard = document.querySelector(".details-container");
  detailCard.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    switch (btn.dataset.action) {
      case "close-todo":
        document
          .querySelector(".details-container")
          .classList.toggle("is-open");
        break;
      case "edit-todo":
        document
          .querySelector(".details-container")
          .classList.toggle("is-open");
        break;
      case "delete-todo":
        const taskId = btn.dataset.id;
        appController.deleteTodo(taskId);
        document
          .querySelector(".details-container")
          .classList.toggle("is-open");
        break;
    }
  });
}
