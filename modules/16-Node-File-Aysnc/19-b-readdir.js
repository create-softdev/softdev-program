const fs = require('fs')

const dirToList = process.argv[2]

fs.stat(dirToList, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  if (stats.isDirectory()) {
    fs.readdir(dirToList, (err, files) => {
      if (err) {
        console.error(err)
        return
      }

      files.forEach(file => console.log(file))
    })
  } else {
    console.log(dirToList)
  }
})

/**
 * A compatible version of Unix's 'ls'
 *
 * If the file is a file, just output it, otherwise list the files and directories inside
 *
 * But, we've ignored testing till now. Is this code testable? No.
 */
