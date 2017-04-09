class Button {
    constructor (text, width = 100, height = 10) {
        this.text = text
        this.width = width
        this.height = height
    }
    click () {
        console.log(this.text + " had been clicked!");
    }
}

class Panel {
  constructor () {
    this.buttons = []
  }
  addButton(button) {
    this.buttons.push(button)
  }
  click(index) {
    this.buttons[index].click()
  }
}

let panel = new Panel();
panel.addButton(new Button("Run"))
panel.click(0) //Run had been clicked!
panel.buttons[0].click() //Run had been clicked!

/**
 * classes are used to seperate responsibilities
 * each class takes care of a certain aspect of the app
 *
 */
