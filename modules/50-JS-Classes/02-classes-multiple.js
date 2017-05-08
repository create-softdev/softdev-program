class Todo {
    constructor (title) {
        this.id = Math.random()
        this.title = title
        this.completed = false
    }
    complete () {
        this.completed = true
    }

    toString() {
      return `${this.title}. completed: ${this.completed}`
    }
}

class TodoList {
  constructor () {
    this.todos = []
  }
  addTodoInstance(todo) {
    this.todos.push(todo)
  }
  addTodo(title) {
    let newTodo = new Todo(title)
    this.todos.push(newTodo)
  }
  complete(index) {
    todos[index].complete()
  }
  printTodos() {
    for (const todo of this.todos) {
      console.log(todo.toString())
    }
  }
}

let todoList = new TodoList();
todoList.addTodoInstance(new Todo('cook dinner'))
todoList.addTodo('wash dishes')
todoList.printTodos()
//cook dinner. completed: false
//wash dishes. completed: false

/**
 * classes are used to seperate responsibilities
 * each class takes care of a certain aspect of the app
 *
 */
