const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.forEach(file => console.log(file))

/**
 * readDirSync - returns an array of the files and directories in the given directory
 *
 * Array.forEach - executes the function for each element in array. A cool alternative to for loops.
 */
