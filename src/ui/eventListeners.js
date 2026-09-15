export function initEventListeners(appController) {
  //ορίζω τα επαναχρησιμοποιούμενα elements
  const formContainer = document.querySelector(".form-container");
  const projectContainer = document.querySelector(".form-project-container");
  const detailsContainer = document.querySelector(".details-container");
  //---------------------------------------
  const taskListContainer = document.querySelector(".main-content");

  taskListContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    switch (btn.dataset.action) {
      case "new-task":
        toogleVisibility(formContainer);
        break;
      case "new-project":
        toogleVisibility(projectContainer);
        break;
    }
  });

  //εδώ πιάνει το κλικ που γινεται για την αποθήκευση του task στην φόρμα που ανοίγει για την συμπλήρωση των στοιχείων
  const taskForm = document.querySelector("#todo-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toogleVisibility(formContainer);

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

  //εδώ πιάνουμε το κλικ που γινεται για την αποθήκευση ενός νέου Project στην φόρμα που ανοίγει για την συμπλήρωση των στοιχείων
  const projectForm = document.querySelector("#project-form");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toogleVisibility(projectContainer);
    const inputProject = {
      name: document.querySelector("#project-name").value,
      description: document.querySelector("#project-description").value,
    };

    //καλούμε εδώ την μέθοδο για την δημιουργία του καινούριου Project
    appController.createProject(inputProject);
    projectForm.reset();
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
        toogleVisibility(detailsContainer);
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
        toogleVisibility(detailsContainer);
        break;
      // case "edit-todo":
      //   toogleVisibility(detailsContainer);
      //   break;
      case "delete-todo":
        const taskId = btn.dataset.id;
        appController.deleteTodo(taskId);
        toogleVisibility(detailsContainer);
        break;
    }
  });

  //εδώ θα πιάσουμε το κλικ που γινεται στα φίλτρα ώστε ανάλογα με την επιλογή να μας εμφανίσει και τα σωστά task
  const projectNav = document.querySelector("#projects-nav");
  projectNav.addEventListener("click", (e) => {
    const liElement = e.target.closest("li");
    if (!liElement) return;

    const projectId = liElement.dataset.id;
    appController.renderTasksById(projectId);
  });
}

//σημείωση για αργότερα να κάνω μια μέθοδο που θα αλλάζει την κατάσταση και θα προσθέτει και θα αφαιρει μια κλάση
//από τα html στοιχεια
function toogleVisibility(element) {
  element.classList.toggle("is-open");
}
