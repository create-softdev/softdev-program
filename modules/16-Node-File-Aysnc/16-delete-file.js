const fs = require('fs')
const path = require('path')

const fileToDelete = path.join(__dirname, 'more', 'hello.txt')

fs.unlink(fileToDelete, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`file ${fileToDelete} deleted!`)
})

/**
 * The async version of unlink.
 */
