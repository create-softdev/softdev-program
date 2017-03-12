const fs = require('fs')
const path = require('path')

const dirToList = path.join(__dirname, 'more')

fs.readdir(dirToList, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  files.forEach(file => console.log(file))
})

/**
 * The async version of readdir
 */
