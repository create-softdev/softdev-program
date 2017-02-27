const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'db.json')

exports.initializeDirectors = (cb) => {
  fs.writeFile(DB_FILE, '[]', cb)
}

exports.addDirector = (director, cb) => {
  fs.readFile(DB_FILE, (err, content) => {
    if (err) return cb(err)

    const db = JSON.parse(content)
    db.push(director)

    fs.writeFile(DB_FILE, JSON.stringify(db), cb)
  })
}

exports.listDirectors = (cb) => {
  fs.readFile(DB_FILE, (err, content) => {
    if (err) return cb(err)

    const db = JSON.parse(content)
    cb(null, db)
  })
}
