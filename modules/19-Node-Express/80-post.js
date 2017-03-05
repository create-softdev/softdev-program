const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/add', function (req, res) {
  const a = parseInt(req.body.a)
  const b = parseInt(req.body.b)

  res.send(`<h1>The sum of ${a} + ${b} is ${a + b}</h1>`)
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/*
* This is how - a POST request handler.
* A POST request handler looks like this (show the curl output)
* The body looks like this: a=4&b=5 (just like in the query)
* But the body can hold so much more text, so this is used when we want to send a LOT of data
* But we need to parse the body, and express doesn't do that by itself.
* We need to use "middleware", which parses the body.
* body-parser and app.use. It's not important to understand the details.
*
* curl 'http://localhost:3000/add' -X POST -d 'a=4' -d 'b=5'
*/
