const fs = require('fs')

function copyFile (source, target, cb) {
  fs.readFile(source, { encoding: 'utf-8' }, (err, content) => {
    if (err) {
      cb(err)
      return
    }
    fs.writeFile(target, content, (err) => {
      if (err) {
        cb(err)
        return
      }
      cb(null, content)
    })
  })
}

copyFile(`${__dirname}/workfiles/hello.txt`,
  `${__dirname}/workfiles/hello-copy-1.txt`, (err, content) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('copied the content', content)
    copyFile(`${__dirname}/workfiles/hello.txt`,
      `${__dirname}/workfiles/hello-copy-2.txt`, (err, content) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('copied the content', content)
      })
  })

/**
 * Another example of using async functions twice.
 * These happen one after another
 */
