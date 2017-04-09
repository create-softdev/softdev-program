class Control{
    constructor (name, width, height) {
        this.name = name
        this.width  = width
        this.height = height
    }
}
class Button extends Control {
    constructor (name, width, height) {
        super(name, width, height)
    }
}
class Label extends Control {
  constructor (name, width, height, isBold) {
    super(name, width, height)
    this.isBold = isBold
  }
}

class UIManager {
  constructor () {
    this.controls = []
  }
  addButton (name, width, height) {
    this.controls.push(new Button(name, width, height));
  }
  addLabel (name, width, height, isBold) {
    this.controls.push(new Label(name, width, height, isBold));
  }
}

let uiManager = new UIManager();
uiManager.addButton("run", 300,100);
uiManager.addLabel("Settings", 400, 150, true);
console.log(uiManager.controls); //[ Button { name: 'run', width: 300, height: 100 }, Label { name: 'Settings', width: 400, height: 150, isBold: true } ]

/**
 * inheritance is used when you can say "B is a kind of A"
 * the base class holds the common members and functions
 * each derived class holds its unique members and functionality
 * runnning base's constructor using "super"
 */
