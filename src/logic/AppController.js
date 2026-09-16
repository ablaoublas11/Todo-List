import { Todo } from "../models/Todo";
import { Project } from "../models/Project";
import { saveTodosToStorage } from "../storage/storage";
import { renderTodo } from "../ui/renderTodos";
import { renderTodoDetails } from "../ui/renderTodoDetails";
import { renderProjects } from "../ui/renderProjects";
//εδώ πρέπει να γίνει και Import το storage.js

export class AppController {
  constructor() {
    this.projects = []; //εδώ αποθηκεύουμε όλα τα project
    this.activeProjectId = null;
    //Δημιουργία ενός default project εάν δεν υπάρχει κάτι στο storage
    this.init();
  }
  init() {
    const defaultProject = new Project("Γενικά", "Γενική κατηγορία Tasks");
    this.projects.push(defaultProject);
    this.activeProjectId = defaultProject.id;
    //καλέι την μέθοδο που ειναι υπέυθυνη για την εμφάνιση των φίλτρων - projects
    renderProjects(this.projects);
  }
  //Δημιουργία ενός task
  createTodo(todoInput) {
    const todo = new Todo(todoInput);
    const activeProject = this.getActiveProject(this.activeProjectId);
    activeProject.addTodo(todo);
    //κάλεσμα της μεθόδου η οποία θα εμφανίζει την λίστα με τα tasks
    renderTodo(activeProject.todos);
  }

  //Δημιουργία καινούριου project
  createProject({ name, description }) {
    const project = new Project(name, description);
    this.setActiveProject(project.id);
    this.projects.push(project);
    renderProjects(this.projects);
  }

  //καλούμε αυτήν την μέθοδο για την εμφάνιση των Details κάθε task
  renderTaskDetails(id) {
    const activeProject = this.getActiveProject(this.activeProjectId);
    const task = activeProject.getTodoById(id);
    renderTodoDetails(task);
  }

  //Διαγραφή ενός task
  deleteTodo(taskId) {
    const activeProject = this.getActiveProject(this.activeProjectId);
    activeProject.removeTodo(taskId);
    renderTodo(activeProject.todos);
  }
  //Επισήμανση σαν ολοκληρομένο για ένα task
  toggleTodoComplete(todoId) {
    const activeProject = this.getActiveProject(this.activeProjectId);
    const activeTask = activeProject.getTodoById(todoId);

    activeTask.toogleIsDone();
    renderTodo(activeProject.todos);
  }

  setActiveProject(projectId) {
    this.activeProjectId = projectId;
  }

  getActiveProject(id) {
    return this.projects.find((proj) => proj.id === id);
  }

  renderTasksById(projectId) {
    //θέτουμε σαν ενεργό project το project που έχουμε επιλέξει από τα φίλτρα
    this.setActiveProject(projectId);
    const activeProject = this.getActiveProject(this.activeProjectId);
    //καλοούμε την μέθοδο για την εμφάνιση των tasks
    renderTodo(activeProject.todos);
  }
}
