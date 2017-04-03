class Person {
    constructor (id, firstName, lastName) {
      this.id = id
      this.firstName = firstName
      this.lastName = lastName
    }
    toString () {
        return `Person(${this.id} ${this.firstName} ${this.lastName})`
    }
}
class Student extends Person {
    constructor (id, firstName, lastName, year) {
        super(id, firstName, lastName)
        this.year = year
    }
    toString () {
        return "Student > " + super.toString()
    }
}
class Teacher extends Person {
    constructor (id, firstName, lastName, parkingPosition) {
        super(id, firstName, lastName)
        this.parkingPosition = parkingPosition
    }
    toString () {
        return "Teacher > " + super.toString()
    }
}

let bob = new Student(512, "Bob", "Sponge", 1)
let puff = new Teacher(3, "Mrs.", "Puff", "corner spot")

console.log(bob.toString()); //Student > Person(512 Bob Sponge)
console.log(puff.toString()); //Teacher > Person(3 Mrs. Puff)

/**
 * "super" is used to access both functions and data members of the base calss
 *  not only the base's constructor
 */
