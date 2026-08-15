// το Project είναι ένα σύνολο από todos,
//οπότε θα πρέπει να δημιουργηθεί ο κατάλληλος δομητής για την δημιουργία το Project
export class Project {
  constructor(title, description) {
    this.id = crypto.randomUUID();
    this.name = this.name;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodoById(todoId) {
    return this.todos.find((todo) => todo.id === todoId);
  }
}
