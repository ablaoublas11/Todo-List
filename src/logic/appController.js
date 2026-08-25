import { Todo } from "../models/Todo";
import { Project } from "../models/Project";
//εδώ πρέπει να γίνει και Import το storage.js, renderTodos.js, renderTodoDetails.js, renderProjects.js

export class AppController {
  constructor() {
    this.project = []; //εδώ αποθηκεύουμε όλα τα project
  }

  //Δημιουργία ενός task
  createTodo(todoInput) {}

  //Δημιουργία καινούριου project
  createProject(projectInput) {}
  //Διαγραφή ενός task
  deleteTodo(todoId) {}
  //Επισήμανση σαν ολοκληρομένο για ένα task
  toogleTodoComplete(todoId) {}

  setActiveProject(projectId) {}
}
