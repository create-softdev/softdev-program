const fs = require('fs')

const dirToList = process.argv[2]

const stats = fs.statSync(dirToList)

if (stats.isDirectory()) {
  const files = fs.readdirSync(dirToList)

  files.forEach(file => console.log(file))
} else {
  console.log(dirToList)
}
