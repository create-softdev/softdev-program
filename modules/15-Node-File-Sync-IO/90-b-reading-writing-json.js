const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'workfiles', 'db.json')

const director = {
  firstName: 'Stanley',
  lastName: 'Kubrick'
}

const directorString = JSON.stringify(director)

fs.writeFileSync(DB_FILE, directorString)

const dbFileText = fs.readFileSync(DB_FILE)

const directorRead = JSON.parse(dbFileText)

console.log(directorRead)   // { firstName: 'Stanley', lastName: 'Kubrick' }

/**
 * Why we can't just read/write objects to files
 * Reminder on JSON.stringify and JSON.parse
 * Converting a file string to/from objects is called "serialization/deserialization"
 */
