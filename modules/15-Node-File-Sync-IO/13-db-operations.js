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

function listDirectors () {
  return JSON.parse(fs.readFileSync(DB_FILE))
}

initializeDirectors()
addDirector({ firstName: 'Stanley', lastName: 'Kubrick' })
addDirector({ firstName: 'Steven', lastName: 'Spielberg' })
addDirector({ firstName: 'Wes', lastName: 'Anderson' })

const directors = listDirectors()

console.log(directors)   // [ { firstName: 'Stanley', lastName: 'Kubrick' },
                         //   { firstName: 'Steven', lastName: 'Spielberg' },
                         //   { firstName: 'Wes', lastName: 'Anderson' } ]

/**
 * Our first database!
 *
 * The idiom of reading the file, changing the data structure, and then writing it back.
 *
 * Real databases don't work like this...
 */
