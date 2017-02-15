const fs = require('fs')
const assert = require('assert')
const path = require('path')

function listFilesInDir (dir) {
  const stats = fs.statSync(dir)

  if (stats.isDirectory()) {
    const files = fs.readdirSync(dir)

    return files
  } else {
    return dir
  }
}

assert.deepStrictEqual(
  listFilesInDir(path.join(__dirname, 'workfiles')), ['git.keep'])

const dirToList = process.argv[2] || __dirname

listFilesInDir(dirToList).forEach(f => console.log(f))

/**
 * Same code, but this time, the logic that brings the result is testable!
 *
 * assert module - throws if the arguments are not the same
 * assert.deepStrictEqual - knows how to check equality of arrays and objects!
 */
