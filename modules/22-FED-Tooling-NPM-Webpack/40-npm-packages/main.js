const model = require('./people-model')
const view = require('./people-view')
const utils = require('./utils')

/* eslint-disable no-undef,no-unused-vars */
document.querySelector('.add-person button').addEventListener('click', () => model.addPerson())

utils.ajaxCall('GET', 'items', undefined,
  (content) => view.addPeopleToView(JSON.parse(content)), 'Could not list person')
