const uuid = require('uuid')
const columns = require('./columns')

function addTaskToColumn (columnId, title, members) {
  const newTask = {id: uuid.v4(), title: title, members: []}

  const column = columns.getColumnInfo(columnId)

  if (!column) return undefined

  column.tasks.push(newTask)

  return newTask
}

function addMemberToTask (taskId, memberId) {
  const task = getTaskInfo(taskId)

  if (!task) return undefined

  task.members.push(memberId)

  return task
}

function removeMemberFromTask (taskId, memberId) {
  const task = getTaskInfo(taskId)

  if (!task) return undefined

  const memberIndex = task.members.findIndex(member => member.id === memberId)

  if (memberIndex === -1) return undefined

  task.members.splice(memberIndex, 1)

  return task
}

function moveTaskToAnotherColumn (taskId, targetColumnId) {
  const column = getColumnOfTask(taskId)

  if (!column) return undefined

  const targetColumn = columns.getColumnInfo(targetColumnId)

  if (!targetColumn) return undefined

  const columnIndex = column.tasks.findIndex(task => task.id === taskId)

  const task = column.tasks[columnIndex]
  column.tasks.splice(columnIndex, 1)

  targetColumn.tasks.push(task)

  return targetColumn
}

function getTaskInfo (taskId) {
  for (const column of columns.listColumns()) {
    for (const task of column.tasks) {
      if (task.id === taskId) {
        return task
      }
    }
  }
  return undefined
}

function getColumnOfTask (taskId) {
  for (const column of columns.listColumns()) {
    for (const task of column.tasks) {
      if (task.id === taskId) {
        return column
      }
    }
  }
  return undefined
}

function listColumnTasks (columnId) {
  const column = columns.getColumnInfo(columnId)

  if (!column) return undefined

  return column.tasks
}

module.exports = {
  addTaskToColumn,
  addMemberToTask,
  removeMemberFromTask,
  moveTaskToAnotherColumn,
  getTaskInfo,
  listColumnTasks
}
