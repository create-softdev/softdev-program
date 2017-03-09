const express = require('express')

const app = express()

app.use('/static', express.static(__dirname))

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * http://localhost:3000/static/01-creating-the-data-from-json.html
 *
 */
