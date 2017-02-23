const fs = require('fs')

const myStats = fs.statSync(`${__filename}`)

console.log(myStats.isDirectory()) // false
console.log(myStats.isFile())      // true
console.log(myStats.mtime)         // something like `2017-02-13T20:38:52.000Z`
console.log(myStats)

console.log(fs.existsSync('this-file-does-not-exist'))    // false

/**
 * statSync - returns a "stat" (information) object on the file or directory
 * existsSync - returns true/false on whether the file exists
 */
