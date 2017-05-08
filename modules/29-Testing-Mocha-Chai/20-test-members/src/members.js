const uuid = require('uuid')
const model = require('./model')

function addMember (name) {
  const newMember = {uuid: uuid.v4(), name: name}

  model.members.push(newMember)

  return newMember
}

function deleteMember (memberId) {
  const memberIndex = model.members.findIndex(member => member.id === memberId)

  if (memberIndex === -1) return false

  model.members.splice(memberIndex, 1)

  return true
}

function updateMember (memberId, name) {
  const memberIndex = model.members.findIndex(member => member.id === memberId)

  if (memberIndex === -1) return undefined

  model.members[memberIndex].name = name

  return model.members[memberIndex]
}

function getMemberInfo (memberId) {
  const memberIndex = model.members.findIndex(member => member.id === memberId)

  if (memberIndex === -1) return undefined

  return model.members[memberIndex]
}

function listMembers () {
  return model.members.map(member => member.id)
}

module.exports = {
  addMember,
  deleteMember,
  updateMember,
  getMemberInfo,
  listMembers
}
