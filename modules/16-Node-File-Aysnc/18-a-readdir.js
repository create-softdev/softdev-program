const fs = require('fs')
const path = require('path')

const dirToList = path.join(__dirname, 'workfiles')

fs.readdir(dirToList, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  files.forEach(file => console.log(file))
})

/**
 * A compatible version of Unix's 'ls'
 *
 * If the file is a file, just output it, otherwise list the files and directories inside
 *
 * But, we've ignored testing till now. Is this code testable? No.
 */
