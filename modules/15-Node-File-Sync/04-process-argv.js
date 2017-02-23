const fs = require('fs')

const fileToRead = process.argv[2]

const text = fs.readFileSync(fileToRead, {encoding: 'utf-8'})

console.log(text) // hello, world

/**
 * process - a built-in global in Node (like 'document' in the browser)
 *
 * process.argv - an array of the arguments
 *      [0]   - the name of the executable (usually the full path to node)
 *      [1]   - the name of the JS file Node is running
 *      [2..] - the "real" arguments
 *
 * To run it, you need a terminal, because of the argument
 */
