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

copyFile(`${__dirname}/more/hello.txt`,
  `${__dirname}/more/hello-copy-1.txt`, (err, content) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('copied the content:', content)
  })

/**
 * creating an async function - all async functions also receive a cb.
 * And instead of console.error-ing it, they delegate the handling to the "parent cb.
 */
