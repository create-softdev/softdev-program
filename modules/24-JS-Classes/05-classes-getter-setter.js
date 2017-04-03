class Person {
    constructor (id) {
      this._id = id
      this._firstName = ""
      this._lastName = ""
    }
    set id  (id)                { this._id = id }
    get id  ()                  { return this._id }
    set firstName (firstName)   { this._firstName = firstName }
    get firstName ()            { return this._firstName }
    set lastName  (lastName)    { this._lastName = lastName }
    get lastName  ()            { return this._lastName }
    get fullName  ()            { return this._firstName + " " + this._lastName }
}

let david = new Person(555)
david.firstName = "David"
david.lastName = "Bowie"
console.log(david.fullName) //David Bowie

/**
 * getters and setters are used to wrap the data members access
 * allowing class users to have usabe functions instead of direct access
 */
