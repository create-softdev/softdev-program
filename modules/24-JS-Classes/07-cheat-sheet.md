# Cheat Sheet for Classes

```js
// class definition
class classname {
  // statements
}

// constructor function on initialize
class classname {
  constructor(_parameters_) {
  }
}

// inharitance - B is a type of A
// use "super" to access the base class
class A{}
}
class B extends A {
    constructor () {
        super()
    }
}

// getters and setters
// organizes member access
class classname {
  set variable (this.variable = variable)
  get variable (return this.variable)
}

// static functions
// can run without an instance of the class
class classname {
  static func () {}
}