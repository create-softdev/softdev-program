const fs = require('fs')

fs.readFile(`${__dirname}/more/hello.txt`, {encoding: 'utf-8'}, (err, content) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(content)
})

/**
 * fs.readFile
 * The additional parameter with the information. It is always the _second_ parameter.
 */
