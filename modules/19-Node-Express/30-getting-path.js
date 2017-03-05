const http = require('http')

http.createServer(function (req, res) {
  if (req.url === '/hello') {
    res.end('hello')
  } else if (req.url === '/world') {
    res.end('world')
  } else {
    res.end('huh?')
  }
}).listen(3000, function () {
  console.log('Listening...')
})

/**
 * Same server
 * Now different paths return different results.
 * The `req.url` is the full path, including the query part
 */
