const fs = require('fs')

const text = fs.readFileSync(`${__dirname}/workfiles/hello.txt`, {encoding: 'utf-8'})

console.log(text)
