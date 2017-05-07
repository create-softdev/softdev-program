const model = require('./people-model')
const view = require('./people-view')

/* eslint-disable no-undef,no-unused-vars */
document.querySelector('.add-person button').addEventListener('click', () => model.addPerson())

ajaxCall('GET', 'items', undefined,
  (content) => view.addPeopleToView(JSON.parse(content)), 'Could not list person')
