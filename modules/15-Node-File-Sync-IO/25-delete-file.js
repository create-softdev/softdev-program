const fs = require('fs')
const path = require('path')

fs.unlinkSync(path.join(__dirname, 'workfiles', 'hello.txt'))
