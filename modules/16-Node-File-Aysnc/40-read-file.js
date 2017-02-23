const fs = require('fs')

fs.readFile(`${__dirname}/workfiles/hello.txt`, {encoding: 'utf-8'}, (err, content) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(content)
})
