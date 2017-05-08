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

class TodoWithOwner extends Todo {
  constructor (title, owner) {
    super (title)
    this.owner = owner
    this.changedOwnership = 0
  }

  changeOwnership(newOwner) {
    this.changedOwnership++;
    this.owner = newOwner
  }

  toString() {
    return super.toString() + `, assigned to ${this.owner}`
  }
}

let paintRoses = new TodoWithOwner('paint the roses red', 'servant1')
paintRoses.toString()

//off with servant1's head!
paintRoses.changeOwnership('servant2')
console.log(paintRoses.toString())  //paint the roses red. completed: false, assigned to servant2
console.log(paintRoses.changedOwnership)  //1
paintRoses.toString()

//off with his head too!
paintRoses.changeOwnership('alice')
console.log(paintRoses.toString())  //paint the roses red. completed: false, assigned to alice
console.log(paintRoses.changedOwnership)  //2

/**
 * inheritance is used when you can say "B is a kind of A"
 * the base class holds the common members and functions
 * each derived class holds its unique members and functionality
 * run base's constructor using "super"
 */
