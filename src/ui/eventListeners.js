export function initEventListeners(appController) {
  const taskListContainer = document.querySelector(".main-content");

  taskListContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "new-task") {
      document.querySelector(".form-container").classList.toggle("is-open");
    } else if (btn.dataset.action === "new-project") {
      document
        .querySelector(".form-project-container")
        .classList.toggle("is-open");
    }
  });
}
