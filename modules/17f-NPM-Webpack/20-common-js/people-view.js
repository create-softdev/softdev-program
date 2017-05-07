/* eslint-disable no-undef,no-unused-vars */
function addPeopleToView (people) {
  for (const personIndex in people) {
    addPersonToView(personIndex, people[personIndex])
  }
}

function addPersonToView (personIndex, person) {
  const peopleContainer = document.querySelector('.people')

  const li = document.createElement('li')
  li.textContent = `${person.name} (${person.age})`

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'delete'
  li.appendChild(deleteButton)
  deleteButton.addEventListener('click', () => {
    deletePerson(personIndex)
  })

  peopleContainer.appendChild(li)
}

function deletePersonFromView (index) {
  document.querySelectorAll('.people li')[index].remove()
}

function getPersonFromForm () {
  const nameFromInput = document.querySelector('#name-input').value
  const ageFromInput = parseInt(document.querySelector('#age-input').value)

  return { name: nameFromInput, age: ageFromInput }
}

function resetPersonForm () {
  document.querySelector('#name-input').value = ''
  document.querySelector('#age-input').value = ''
}

module.exports = {
  addPeopleToView,
  addPersonToView,
  deletePersonFromView,
  getPersonFromForm,
  resetPersonForm
}
