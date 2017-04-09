// 1. classic, along with functions that get or return a todo. (addTodosToList, createTodo, findById...)
const newTodo = {
  id: Math.random(),
  title: 'Untitled',
  completed: false
}

// 2. Same, but with class

class Todo {
  constructor (title) {
    this.id = Math.random()
    this.title = title
    this.completed = false
  }

  complete () {
    this.checked = true
  }
}

// 3. What can one do, we have to teach inheritance!

class TodoWithOwner extends Todo {
  constructor (title, owner) {
    super(title)
    this.owner = owner
    this.changedOwnership = 0
  }

  changeOwnership (newOwner) {
    this.changedOwnership++
    this.owner = newOwner
  }

  toString () {
    return `${this.title}, assigned to ${this.owner}, completed: ${this.completed}`
  }
}

// 4. Data abstraction through abstracting a data structure

class TodoQueue {

}

// Praxis - slowly build a polish notation calculator
