const http = require('http')

const server = http.createServer((req, res) => {
  res.end(`
<h1>Hello, world</h1>
  `)
})

server.listen(3000, (err) => {
  if (err) return console.err(err)

  console.log('listening on port 3000')
})

/**
 * Try in the browser - it works
 * http.createServer - requires a "request handler"
 * request handler is called on each request, and receives:
 * req - object with information about the request
 * res - object with methods that enabling sending things to the request.
 * res.end - send back a string, and end the request
 * When we do `listen`, we start listening on requests.
 * We need to supply the port.
 * curl http://localhost:3000 returns `<h1>hello, world</h1>`
 * So do curl http://localhost:3000/sdflkdhsdf
 * We totally ignore the path
 */
