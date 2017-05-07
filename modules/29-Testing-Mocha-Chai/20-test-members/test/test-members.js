/* global describe,it */
const expect = require('chai').expect
const members = require('../src/members')

describe('members', function () {
  it('should have default members in the beginning', function () {
    const memberIdList = members.listMembers()

    expect(memberIdList.length).to.equal(3)

    const member0 = members.getMemberInfo(memberIdList[0])
    expect(member0.name).to.equal('Gil Tayar')

    const member2 = members.getMemberInfo(memberIdList[2])
    expect(member2.name).to.equal('Alex')
  })

  it('addMember should return the new member', function () {
    const newMember = members.addMember('New Member')

    expect(newMember.name).to.equal('New Member')
    expect(newMember.id).to.not.be.undefined
  })

  it('addMember should add the new member to the end of the list', function () {
    const memberCountBeforeAdd = members.listMembers().length

    const newMember = members.addMember('New Member 2')

    expect(members.listMembers().length).to.equal(memberCountBeforeAdd + 1)

    expect(members.listMembers()[memberCountBeforeAdd]).to.equal(newMember.id)
    expect(members.getMemberInfo(members.listMembers()[memberCountBeforeAdd]).name).to.equal(newMember.name)
  })

  it('addMember should add the new member so that getMemberInfo can find it', function () {
    const newMember = members.addMember('New Member')

    expect(members.getMemberInfo(newMember.id).name).to.equal('New Member')
  })

  it('removeMember should return true when removing a member', function () {
    const newMember = members.addMember('Another New Member')

    const isDeleted = members.deleteMember(newMember.id)

    expect(isDeleted).to.be.true
  })

  it('removeMember should return false when removing non-existing member', function () {
    const isDeleted = members.deleteMember('non-existent-id!!!')

    expect(isDeleted).to.be.false
  })

  it('removeMember should remove the member from the list', function () {
    console.log(members.listMembers().map(memberId => members.getMemberInfo(memberId).name))
    const newMember = members.addMember('Another New Member')

    const memberCountBeforeDelete = members.listMembers().length

    members.deleteMember(newMember.id)

    expect(members.listMembers().length).to.equal(memberCountBeforeDelete - 1)
    expect(members.listMembers().map(memberId => members.getMemberInfo(memberId).name)).to.not.contain('Another New Member')
  })
})
