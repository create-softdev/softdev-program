const fs = require('fs')

fs.readFile(`${__dirname}/workfiles/hello.txt`, {encoding: 'utf-8'}, (err, content) => {
  if (err) {
    console.error(err)
    return
  }
  fs.writeFile(`${__dirname}/workfiles/hello-copy.txt`, content, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
})

/**
 * copying a file.
 * The writeFile occurs _inside_ the callback
 * You should detail how it works, but don't get too much into it.
 */
