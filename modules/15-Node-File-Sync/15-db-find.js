const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'workfiles', 'db.json')

function initializeDirectors () {
  fs.writeFileSync(DB_FILE, '[]')
}

function addDirector (director) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  db.push(director)

  fs.writeFileSync(DB_FILE, JSON.stringify(db))
}

function findDirectorIndex (director) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  return db.findIndex(d => d.firstName === director.firstName && d.lastName === director.lastName)
}

initializeDirectors()
addDirector({ firstName: 'Stanley', lastName: 'Kubrick' })
addDirector({ firstName: 'Steven', lastName: 'Spielberg' })
addDirector({ firstName: 'Wes', lastName: 'Anderson' })

console.log(findDirectorIndex({ firstName: 'Wes', lastName: 'Anderson' })) // 2

/**
 * find - our first query!
 *
 * Array.findIndex
 *
 */
