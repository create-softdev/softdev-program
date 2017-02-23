const fs = require('fs')

function catFiles (files, cb) {
  function readFile (i) {
    const fileToRead = filesToRead[i]

    fs.readFile(fileToRead, {encoding: 'utf-8'}, (err, content) => {
      if (err) {
        cb(err)
        return
      }
      console.log(content)

      if (i + 1 < filesToRead.length) {
        readFile(i + 1)
      } else {
        cb(null)
      }
    })
  }

  readFile(0)
}

const filesToRead = process.argv.slice(2)

catFiles(filesToRead, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('done!')
  }
})

/**
 * This does work!
 */
