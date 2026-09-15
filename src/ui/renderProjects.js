export function renderProjects(projects) {
  const container = document.querySelector("#projects-nav");
  container.innerHTML = "";
  const template = document.querySelector("#project-filters");

  projects.forEach((proj) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".project-nav-item").dataset.id = proj.id;
    clone.querySelector(".project-name").textContent = proj.name;
    container.append(clone);
  });
}
