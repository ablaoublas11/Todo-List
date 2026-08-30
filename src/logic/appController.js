import { Todo } from "../models/Todo";
import { Project } from "../models/Project";
import { saveTodosToStorage } from "../storage/storage";
//εδώ πρέπει να γίνει και Import το storage.js, renderTodos.js, renderTodoDetails.js, renderProjects.js

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
  }
  //Δημιουργία ενός task
  createTodo(todoInput) {
    const todo = new Todo(todoInput);
    const activeProjetc = this.projects.find(
      (proj) => proj.id === this.activeProjectId,
    );
    activeProjetc.addTodo(todo);
  }

  //Δημιουργία καινούριου project
  createProject(projectInput) {}
  //Διαγραφή ενός task
  deleteTodo(todoId) {}
  //Επισήμανση σαν ολοκληρομένο για ένα task
  toggleTodoComplete(todoId) {}

  setActiveProject(projectId) {}
}
