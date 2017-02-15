const fs = require('fs')

const filesToRead = process.argv.slice(2)

for (const fileToRead of filesToRead) {
  const text = fs.readFileSync(fileToRead, { encoding: 'utf-8' })

  console.log(text)
}

/**
 * This is 'cat' from the CLI. An exact implementation.
 *
 * To run it, you need a terminal, because of the arguments
 */
