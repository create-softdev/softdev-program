const fs = require('fs')
const path = require('path')

const fileToDelete = path.join(__dirname, 'workfiles', 'hello.txt')

fs.unlinkSync(fileToDelete)

/**
 * unlink === delete.
 * path.join: OS independent creation of paths. Adds '/' in Unix and '\' in Windows
 */
