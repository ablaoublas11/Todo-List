// [
//     {
//         id: "id για κάθε ένα task"
//         title: "Τίτλος Task",
//         description: "Περιγραφή Task",
//         creationDate: "Ημερομηνία δημιουργίας",
//         expireDate: "Ημερομηνία λήξης",
//         priority: "Πρωτεραιότητα",
//         isDone: "True or False εάν έχει ολοκληροθεί"
//         notes: "Σημειώσεις για την κάθε εργασία"
//     }
// ]
export class Todo {
  constructor({ title, description, notes, expireDate, priority }) {
    this.id = crypto.randomUUID(); //τυχαία δημιουργία id
    this.title = title;
    this.description = description;
    this.notes = notes;
    this.creationDate = new Date().toDateString(); //ημερομηνία της μορφής Fri Aug 15 2025
    this.expireDate = expireDate;
    this.priority = priority;
    this.isDone = false;
  }

  toogleIsDone() {
    this.isDone = !this.isDone;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  updateDetails({ title, description, notes, expireDate }) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (notes) this.notes = notes;
    if (expireDate) this.expireDate = expireDate;
  }
}
