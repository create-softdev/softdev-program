const fs = require('fs')

const filesToRead = process.argv.slice(2)

for (const fileToRead of filesToRead) {
  fs.readFile(fileToRead, {encoding: 'utf-8'}, (err, content) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(content)
  })
}

/**
 * Trying to build an asynchronous version of the synchronous cat.
 *
 * This doesn't work. Try `node 60-a-cat.js more/a.txt more/b.txt more/c.txt`
 * If you run this a couple of times, you will see the order is different each time.
 * This is because the callback is called *asynchronously*
 *
 * How do we solve this? We will see in the next slides.
 */
