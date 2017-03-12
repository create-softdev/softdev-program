const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, '/more/simple')))

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * Nice! But there's a simpler way, using a builtin of express - `express.static`
 * accepts a path to a directory.
 * Will serve all files there.
 * Navigate in browser to http://localhost:3000/static/hello.html
 * Navigate in browser to http://localhost:3000/static/
 * Supports index.html feature.
 * Supports sub-directories
 * Will return appropriate Content-Type according to extension (see JPG)
 */
