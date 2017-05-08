/* global describe, it */
const utils = require('../src/utils')
const expect = require('chai').expect

describe('utils', function () {
  describe('sum', function () {
    it('should return 0 on empty array', function () {
      const result = utils.sum([])

      if (result !== 0) throw new Error('Bad test! bad bad test!')
    })

    it('should return the sum on an array', function () {
      const result = utils.sum([4, 7, 2])

      expect(result).to.equal(13)
    })

    it('should return the sum on an array of size one', function () {
      const result = utils.sum([4])

      expect(result).to.equal(4)
    })

    it('should return the sum on an array with negatives', function () {
      const result = utils.sum([4, -3, 3, -4])

      expect(result).to.equal(0)
    })
  })

  describe('max', function () {
    it('should return the minimum number in an array', function () {
      const result = utils.max([4, 3, 6, 7, 2])

      expect(result).to.equal(7)
    })

    it('should return the number on an array with only one number', function () {
      const result = utils.max([88])

      expect(result).to.equal(88)
    })

    it('should return the maximum on an array of all negatives', function () {
      const result = utils.max([-4, -3, -1, -2])

      expect(result).to.equal(-1)
    })

    it('should return NaN on an empty array', function () {
      const result = utils.max([])

      expect(result).to.be.NaN
    })
  })
  describe('fill', function () {
    it('should create an array with the correct count', function () {
      const result = utils.fill(777, 3)

      expect(result).to.deep.equal([777, 777, 777])
    })
  })
})
