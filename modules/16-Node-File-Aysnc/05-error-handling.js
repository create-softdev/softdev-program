const fs = require('fs')

fs.writeFile(`${__dirname}/does-not-exist/hello.txt`, 'hello, world', (err) => {
  if (err) {
    console.log('File was not written')
    console.error(err)

    return
  }
  console.log('file was written!')
})
