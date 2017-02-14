const fs = require('fs')

const text = fs.readFileSync(`${__dirname}/workfiles/hello.txt`, {encoding: 'utf-8'})

console.log(text) // hello, world

/**
 * readFileSync - read workfiles
 * options object - regular pattern in JS
 * encoding - the difference between bytes and character strings
 *    bytes: numbers from 0-255 that are the "atoms" of workfiles
 *    characters: the things we see in strings...
 *    encoding: how do I translate a stream of bytes to characters
 *    ascii: the original encoding. Only encodes US characters (+ the regular keyboard chars like '&')
 *    utf-8: the most popular encoding currently. Compatible with ASCII.
 */
