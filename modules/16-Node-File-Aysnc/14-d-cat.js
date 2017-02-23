const fs = require('fs')

const filesToRead = process.argv.slice(2)

function readFile (i) {
  const fileToRead = filesToRead[i]

  fs.readFile(fileToRead, {encoding: 'utf-8'}, (err, content) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(content)

    if (i + 1 < filesToRead.length) {
      readFile(i + 1)
    }
  })
}

readFile(0)

/**
 * This does work!
 */
