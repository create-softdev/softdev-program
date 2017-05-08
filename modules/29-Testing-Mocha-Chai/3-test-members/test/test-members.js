/* global describe,it */
const expect = require('chai').expect
const members = require('../src/members')

describe('members', function () {
  describe('defaults', function () {
    it('should have default members in the beginning', function () {
      const memberIdList = members.listMembers()

      expect(memberIdList.length).to.equal(3)

      const member0 = members.getMemberInfo(memberIdList[0])
      expect(member0.name).to.equal('Gil Tayar')

      const member2 = members.getMemberInfo(memberIdList[2])
      expect(member2.name).to.equal('Alex')
    })
  })
  describe('addMember', function () {
    it('should return the new member', function () {
      const newMember = members.addMember('New Member')

      expect(newMember.name).to.equal('New Member')
      expect(newMember.id).to.not.be.undefined
    })

    it('should add the new member to the end of the list', function () {
      const memberCountBeforeAdd = members.listMembers().length

      const newMember = members.addMember('New Member 2')

      expect(members.listMembers().length).to.equal(memberCountBeforeAdd + 1)

      expect(members.listMembers()[memberCountBeforeAdd]).to.equal(newMember.id)
      expect(members.getMemberInfo(members.listMembers()[memberCountBeforeAdd]).name).to.equal(newMember.name)
    })

    it('should add the new member so that getMemberInfo can find it', function () {
      const newMember = members.addMember('New Member')

      expect(members.getMemberInfo(newMember.id).name).to.equal('New Member')
    })
  })

  describe('removeMember', function () {
    it('should return true when removing a member', function () {
      const newMember = members.addMember('Another New Member')

      const isDeleted = members.deleteMember(newMember.id)

      expect(isDeleted).to.be.true
    })

    it('should return false when removing non-existing member', function () {
      const isDeleted = members.deleteMember('non-existent-id!!!')

      expect(isDeleted).to.be.false
    })

    it('should remove the member from the list', function () {
      const newMember = members.addMember('Another New Member')

      const memberCountBeforeDelete = members.listMembers().length

      members.deleteMember(newMember.id)

      expect(members.listMembers().length).to.equal(memberCountBeforeDelete - 1)
      expect(members.listMembers().map(memberId => members.getMemberInfo(memberId).name)).to.not.contain('Another New Member')
    })
  })

  describe('updateMember', function () {
    it('should returned the updated member', function () {
      const newMember = members.addMember('Yet Another New Member')

      const updatedMember = members.updateMember(newMember.id, 'new name')

      expect(updatedMember.id).to.equal(newMember.id)
      expect(updatedMember.name).to.equal(newMember.name)
    })

    it('should returned undefined if no such member', function () {
      const updatedMember = members.updateMember('non-existant-id-2', 'new name')

      expect(updatedMember).to.be.undefined
    })

    it('should update the member in the list', function () {
      const newMember = members.addMember('Even Yet Another New Member')

      const updatedMember = members.updateMember(newMember.id, 'new name 2')

      expect(members.getMemberInfo(updatedMember.id).name).to.equal('new name 2')
    })
  })
})
