const uuid = require('uuid')
const model = require('./model')

function addColumn (title) {
  const newColumn = { uuid: uuid.v4(), title: title, tasks: [] }

  model.taskColumns.push(newColumn)

  return newColumn
}

function deleteColumn (columnId) {
  const columnIndex = model.taskColumns.findIndex(column => column.id === columnId)

  if (columnIndex === -1) return false

  model.taskColumns.splice(columnIndex, 1)

  return true
}

function updateColumn (columnId, title) {
  const columnIndex = model.taskColumns.findIndex(column => column.id === columnId)

  if (columnIndex === -1) return false

  model.taskColumns[columnIndex].title = title

  return true
}

function getColumnInfo (columnId) {
  const columnIndex = model.taskColumns.findIndex(column => column.id === columnId)

  if (columnIndex === -1) return undefined

  return model.taskColumns[columnIndex]
}

function listColumns () {
  return model.taskColumns.map(column => column.id)
}

module.exports = {
  addColumn,
  deleteColumn,
  updateColumn,
  getColumnInfo,
  listColumns
}
