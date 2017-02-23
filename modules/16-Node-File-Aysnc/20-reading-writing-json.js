const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'workfiles', 'db.json')

const directors = [{
  firstName: 'Stanley',
  lastName: 'Kubrick'
},
{
  firstName: 'Akira',
  lastName: 'Kurosawa'
}]

const directorString = JSON.stringify(directors)

fs.writeFile(DB_FILE, directorString, (err) => {
  if (err) return console.log(err)

  fs.readFile(DB_FILE, (err, content) => {
    if (err) return console.log(err)

    const directorRead = JSON.parse(content)

    console.log(directorRead)   // [ { firstName: 'Stanley', lastName: 'Kubrick' },
                                // { firstName: 'Akira', lastName: 'Kurosawa' } ]
  })
})

/**
 * Why we can't just read/write objects to files
 * Reminder on JSON.stringify and JSON.parse
 * Converting a file string to/from objects is called "serialization/deserialization"
 */
