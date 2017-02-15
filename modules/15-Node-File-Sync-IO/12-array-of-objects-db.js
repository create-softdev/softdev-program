const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'workfiles', 'db.json')

const director1 = {
  firstName: 'Stanley',
  lastName: 'Kubrick'
}

const director2 = {
  firstName: 'Akira',
  lastName: 'Kurosawa'
}

fs.writeFileSync(DB_FILE, JSON.stringify([director1, director2]))

const dbReadFromFile = JSON.parse(fs.readFileSync(DB_FILE))

console.log(dbReadFromFile[1]) // { firstName: 'Akira', lastName: 'Kurosawa' }

/**
 * JSON supports arrays, so we can read/write arrays and not just objects
 */
