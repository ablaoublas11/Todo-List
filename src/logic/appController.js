import { Todo } from "../models/Todo";
import { Project } from "../models/Project";

export class AppController {
  constructor() {
    this.todo = []; //εδώ αποθηκεύουμε όλατ τα tasks
  }

  createTodo(todoInput) {
    //εδώ το todoInput είναι αντικείμενο που περιέχει τα εισαγώμενα στοιχεία του χρήστη για το task
    //1. πρέπει να ελένξουμε εάν είναι άδειο το εντικέιμενο

    //2. δημιουργία αντικειμένο Todo
    const todo = new Todo(todoInput);
    //3. κάλεσμα της μεθόδου για αποθήκευση του todo
  }
}
