const fs = require('fs')

const fileToRead = process.argv[2]

const text = fs.readFileSync(fileToRead, {encoding: 'utf-8'})

console.log(text)
