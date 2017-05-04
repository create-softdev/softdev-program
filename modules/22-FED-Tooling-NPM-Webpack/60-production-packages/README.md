# NPM Packages For Production

* Besides using npm packages for development purposes (e.g. webpack),
  we can use npm packages as modules.
* We can install a package, and then use it in our code, using `require`.
* Let's use a very famous package, `left-pad`, to pad the age with zeros.

* From [`people-view.js`](./people-view.js):

```js
const leftPad = require('left-pad')

//...

function addPersonToView (personIndex, person) {
  const peopleContainer = document.querySelector('.people')

  const li = document.createElement('li')
  li.textContent = `${person.name} (${leftPad(person.age, 3, '0')})`
  //...
}
//...
```

## Installing a production dependency

* To install a production dependency, do:

```sh
npm install --save left-pad
```

* `--save` is for when you want to `require` it (i.e. when it's in use by "production code).
* `--save-dev` is for when you want to use it as a development tool, during development.
