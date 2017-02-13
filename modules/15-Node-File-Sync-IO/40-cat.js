const fs = require('fs')

const filesToRead = process.argv.slice(2)

for (const fileToRead of filesToRead) {
  const text = fs.readFileSync(fileToRead, { encoding: 'utf-8' })

  console.log(text)
}
