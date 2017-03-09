/* eslint-disable no-undef,no-unused-vars */
function addPerson () {
  const person = getPersonFromForm()

  ajaxCall('POST', '/add-person', JSON.stringify(person), () => {
    addPersonToView(document.querySelectorAll('.people li').length, person)
    resetPersonForm()
  }, 'Could not add person')
}

function deletePerson (index) {
  ajaxCall('POST', '/delete-person', JSON.stringify({ index: index }),
    () => deletePersonFromView(index), 'Could not delete person')
}
