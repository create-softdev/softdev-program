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

function deleteDirector (index) {
  const db = JSON.parse(fs.readFileSync(DB_FILE))

  db.splice(index, 1)

  fs.writeFileSync(DB_FILE, JSON.stringify(db))
}

function listDirectors () {
  return JSON.parse(fs.readFileSync(DB_FILE))
}

initializeDirectors()
addDirector({ firstName: 'Stanley', lastName: 'Kubrick' })
addDirector({ firstName: 'Steven', lastName: 'Spielberg' })
addDirector({ firstName: 'Wes', lastName: 'Anderson' })

deleteDirector(1)

const directors = listDirectors()

console.log(directors)   // [ { firstName: 'Stanley', lastName: 'Kubrick' },
                         //   { firstName: 'Wes', lastName: 'Anderson' } ]

/**
 * delete by index
 *
 * Array.splice
 */
