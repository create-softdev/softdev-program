const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'more', 'db.json')

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
 * Writing and reading a db file.
 */
