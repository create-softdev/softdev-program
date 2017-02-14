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

function findDirectorByName (directorName) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  return db.find(d => `${d.firstName} ${d.lastName}` === directorName)
}

initializeDirectors()
addDirector({ firstName: 'Stanley', lastName: 'Kubrick' })
addDirector({ firstName: 'Steven', lastName: 'Spielberg' })
addDirector({ firstName: 'Wes', lastName: 'Anderson' })

console.log(findDirectorByName('Stanley Kubrick')) // { firstName: 'Stanley', lastName: 'Kubrick' }

/**
 * Usually, there are lots of queries. This is an example of a query
 *
 * Array.find
 *
 * There can be queries by other things...
 */
