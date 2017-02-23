const fs = require('fs')
const path = require('path')

const fileToDelete = path.join(__dirname, 'workfiles', 'hello.txt')

fs.unlink(fileToDelete, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`file ${fileToDelete} deleted!`)
})

/**
 * unlink === delete.
 * path.join: OS independent creation of paths. Adds '/' in Unix and '\' in Windows
 */
