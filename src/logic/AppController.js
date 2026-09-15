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
    const activeProjetc = this.projects.find(
      (proj) => proj.id === this.activeProjectId,
    );
    activeProjetc.addTodo(todo);
    //κάλεσμα της μεθόδου η οποία θα εμφανίζει την λίστα με τα tasks
    renderTodo(activeProjetc.todos);
  }

  //Δημιουργία καινούριου project
  createProject({name, description}) {
    const project = new Project(name, description);
    this.setActiveProject(project.id);
    this.projects.push(project);
    renderProjects(this.projects);
  }

  //καλούμε αυτήν την μέθοδο για την εμφάνιση των Details κάθε task
  renderTaskDetails(id) {
    const project = this.projects.find((p) => p.id === this.activeProjectId);
    const task = project.getTodoById(id);
    renderTodoDetails(task);
  }

  //Διαγραφή ενός task
  deleteTodo(taskId) {
    const activeProjetc = this.projects.find(
      (proj) => proj.id === this.activeProjectId,
    );
    activeProjetc.removeTodo(taskId);
    renderTodo(activeProjetc.todos);
  }
  //Επισήμανση σαν ολοκληρομένο για ένα task
  toggleTodoComplete(todoId) {}

  setActiveProject(projectId) {
    this.activeProjectId = projectId;
  }

  renderTasksById(projectId){
    //θέτουμε σαν ενεργό project το project που έχουμε επιλέξει από τα φίλτρα
    this.setActiveProject(projectId);
    const activeProjetc = this.projects.find(
      (proj) => proj.id === projectId,
    );
    //καλοούμε την μέθοδο για την εμφάνιση των tasks
    renderTodo(activeProjetc.todos);
  }
}
