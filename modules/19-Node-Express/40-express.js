const express = require('express')

const app = express()

app.get('/hello', function (req, res) {
  res.send('hello')
})

app.get('/world', function (req, res) {
  res.send('world')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/**
 * express - an npm package.
 * express is a "framework". It wraps http-server and makes it easier to use.
 * express() - creates an express "app".
 * res.send(...)
 *
 * app.get - adds a request handler to the path give
 * app.listen - exactly like server.listen.
 */
