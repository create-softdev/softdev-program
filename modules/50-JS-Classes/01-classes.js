class Button {
    constructor (text, width = 100, height = 10) {
        this.text = text
        this.width = width
        this.height = height
    }
    click () {
        console.log(this.text + " had been clicked!")
    }
}

let runButton = new Button("Run")
let stopButton = new Button("Stop", 200, 50)
runButton.click() //Run had been clicked!
stopButton.click() //Stop had been clicked!

/**
 * class is an object-oriented concept for delegated authority
 * constructor function is called on creation of the class
 * class contains **data members** and functions
 * data members can be types, arrays, objects and other classes
 * accessing data members are accessed using 'this.'
 *
 */
