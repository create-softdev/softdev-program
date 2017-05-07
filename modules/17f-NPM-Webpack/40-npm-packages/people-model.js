const view = require('./people-view')
const utils = require('./utils')

// Note - we have to use `exports....` exporting, and not `module.exports = {...}` because
// there is a circular reference problem between view and model.

exports.addPerson = function () {
  const person = view.getPersonFromForm()

  utils.ajaxCall('POST', 'items', JSON.stringify(person), () => {
    view.addPersonToView(document.querySelectorAll('.people li').length, person)
    view.resetPersonForm()
  }, 'Could not add person')
}

exports.deletePerson = function (index) {
  utils.ajaxCall('DELETE', `items/${index}`, undefined,
    () => view.deletePersonFromView(index), 'Could not delete person')
}
