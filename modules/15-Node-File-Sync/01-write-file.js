const fs = require('fs')

fs.writeFileSync(`${__dirname}/workfiles/hello.txt`, 'hello, world')


/**
 * require - returns another object from another **module**
 * fs - file system module that is built into Node
 * fs.writeFileSync - writes text to a file. Overwrites what was there.
 */
