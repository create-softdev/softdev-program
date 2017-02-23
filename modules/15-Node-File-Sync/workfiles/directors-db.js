const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, '../workfiles', 'db.json')

exports.initialize = function () {
  fs.writeFileSync(DB_FILE, '[]')
}

exports.add = function (director) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  db.push(director)

  fs.writeFileSync(DB_FILE, JSON.stringify(db))
}

exports.list = () =>
  JSON.parse(fs.readFileSync(DB_FILE))

exports.findIndex = findDirectorIndex

function findDirectorIndex (director) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  return db.findIndex(d => d.firstName === director.firstName && d.lastName === director.lastName)
}

/**
 * The module
 *
 * DB_FILE is internal (note the '..')
 *
 * exports object is what is returned by the require(...)
 *
 * You can use regular anonymous functions or arrow!
 */
