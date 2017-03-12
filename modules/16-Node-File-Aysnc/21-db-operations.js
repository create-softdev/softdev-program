const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'more', 'db.json')

function initializeDirectors (cb) {
  fs.writeFile(DB_FILE, '[]', cb)
}

function addDirector (director, cb) {
  fs.readFile(DB_FILE, (err, content) => {
    if (err) return cb(err)

    const db = JSON.parse(content)
    db.push(director)

    fs.writeFile(DB_FILE, JSON.stringify(db), cb)
  })
}

function listDirectors (cb) {
  fs.readFile(DB_FILE, (err, content) => {
    if (err) return cb(err)

    const db = JSON.parse(content)
    cb(null, db)
  })
}

initializeDirectors((err) => {
  if (err) console.error(err)
  addDirector({ firstName: 'Stanley', lastName: 'Kubrick' }, (err) => {
    if (err) console.error(err)
    addDirector({ firstName: 'Steven', lastName: 'Spielberg' }, (err) => {
      if (err) console.error(err)
      addDirector({ firstName: 'Wes', lastName: 'Anderson' }, (err) => {
        if (err) console.error(err)
        listDirectors((err, directors) => {
          if (err) console.error(err)
          console.log(directors)   // [ { firstName: 'Stanley', lastName: 'Kubrick' },
                                   //   { firstName: 'Steven', lastName: 'Spielberg' },
                                   //   { firstName: 'Wes', lastName: 'Anderson' } ]
        })
      })
    })
  })
})

/**
 * The async version of the db operations.
 * Notice the pyramid of doom!
 */
