const fs = require('fs')

fs.stat(`${__filename}`, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.isDirectory()) // false
  console.log(stats.isFile())      // true
  console.log(stats.mtime)         // something like `2017-02-13T20:38:52.000Z`
  console.log(stats)
})
