const fs = require('fs')

fs.writeFileSync(`${__dirname}/workfiles/hello.txt`, 'hello, world')
