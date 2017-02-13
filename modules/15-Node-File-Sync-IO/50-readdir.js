const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.forEach(file => console.log(file))
