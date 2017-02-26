const fs = require('fs')

const filesToRead = process.argv.slice(2)

fs.readFile(filesToRead[0], {encoding: 'utf-8'}, (err, content) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(content)

  if (filesToRead.length >= 2) {
    fs.readFile(filesToRead[1], {encoding: 'utf-8'}, (err, content) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(content)
    })
  }
})

/**
 * Let's start with just two files. How would we do this? Just like we did in copyFile -
 * in the callback, we console.log the output, then do it again.
 */
