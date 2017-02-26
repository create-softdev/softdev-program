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
 * So we have this pattern of reading a file, print it, and then doing it again with the next file
 * The "it again" - we put in a function.
 *
 * This is "recursion" - a function calling itself.
 */
