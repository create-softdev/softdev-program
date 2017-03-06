const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/add', function (req, res) {
  console.log(req.body)
  const a = parseInt(req.body.a)
  const b = parseInt(req.body.b)

  res.send(`<h1>The sum of ${a} + ${b} is ${a + b}</h1>`)
})

  app.listen(process.env.PORT || 3000, function () {
    console.log('Listening...')
  })

/*
* The body can be full JSON.
* How can the browser know whether it's JSON or url-encoded?
* Explain headers
* Explain Content-Type
* bodyParser.json
* curl 'http://localhost:3000/add'  -H "Content-Type=application/json" -X POST -d '{"a":4,"b":5}' \

* Can the browser send such a POST using <form>? No.
* So, how?
* We'll see later when we learn about Ajax.
*/
