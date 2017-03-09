/* eslint-disable no-undef,no-unused-vars */
document.querySelector('.add-person button').addEventListener('click', () => addPerson())

ajaxCall('GET', '/people', null, (content) => addPeopleToView(JSON.parse(content)), 'Could not list person')
