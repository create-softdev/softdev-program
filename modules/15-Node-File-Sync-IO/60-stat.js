const fs = require('fs')

const myStats = fs.statSync(`${__filename}`)

console.log(myStats.isDirectory()) // false
console.log(myStats.isFile())      // true
console.log(myStats.mtime)         // something like `2017-02-13T20:38:52.000Z`
console.log(myStats)
