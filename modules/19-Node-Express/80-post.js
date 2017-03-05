const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

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
* curl 'http://localhost:3000/add' -X POST -d 'a=4' -d 'b=5'
* middleware
* bodyParser.urlencoded
*/
