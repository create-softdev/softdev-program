/* eslint-disable no-undef,no-unused-vars */
function addPerson () {
  const person = getPersonFromForm()

  ajaxCall('POST', 'items', JSON.stringify(person), () => {
    addPersonToView(document.querySelectorAll('.people li').length, person)
    resetPersonForm()
  }, 'Could not add person')
}

function deletePerson (index) {
  ajaxCall('DELETE', `items/${index}`, undefined,
    () => deletePersonFromView(index), 'Could not delete person')
}
