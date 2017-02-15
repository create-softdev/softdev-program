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

function findDirectorsByFirstName (firstName) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  return db.filter(d => d.firstName === firstName)
}

initializeDirectors()
addDirector({ firstName: 'Stanley', lastName: 'Kubrick' })
addDirector({ firstName: 'Steven', lastName: 'Spielberg' })
addDirector({ firstName: 'Wes', lastName: 'Anderson' })
addDirector({ firstName: 'Steven', lastName: 'Soderbergh' })

console.log(findDirectorsByFirstName('Steven')) // [ { firstName: 'Steven', lastName: 'Spielberg' },
                                                //   { firstName: 'Steven', lastName: 'Soderbergh' } ]

/**
 * Usually, there are lots of queries. This is an example of a query
 *
 * There can be queries by other things...
 */
