const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, '/assets'), {extensions: ['html']}))

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/**
 * Small refinement of earlier
 * Will serve the same files, without needing the ugly '.html' extension.
 * Much cleaner!
 */
