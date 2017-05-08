const objectTodo = {
  id: Math.random(),
  title: 'untitled',
  complete: false
}

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

let laundryObj = objectTodo
laundryObj.title = 'laundry'

let laundry = new Todo('laundry')
let callGrandma = new Todo('call grandma')

console.log (laundry.toString()) //laundry. completed: false
console.log (callGrandma.toString()) //call grandma. completed: false
console.log (callGrandma.completed) //false

callGrandma.complete()
console.log (callGrandma.completed) //true
console.log (callGrandma.toString()) //call grandma. completed: true


/**
 * class is an object-oriented concept for delegated authority
 * constructor function is called on creation of the class
 * you can
 * class contains **data members** and functions
 * data members can be types, arrays, objects and other classes
 * accessing data members are accessed using 'this.'
 *
 */
