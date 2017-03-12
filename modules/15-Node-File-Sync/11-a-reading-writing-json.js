const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'more', 'db.json')

const director = {
  firstName: 'Stanley',
  lastName: 'Kubrick'
}

fs.writeFileSync(DB_FILE, JSON.stringify(director))

console.log(JSON.parse(fs.readFileSync(DB_FILE))) // { firstName: 'Stanley', lastName: 'Kubrick' }

/**
 * Why we can't just read/write objects to files
 * Reminder on JSON.stringify and JSON.parse
 * Converting a file string to/from objects is called "serialization/deserialization"
 */
