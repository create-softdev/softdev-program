const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('/static', express.static(__dirname))

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/people', (req, res) => {
  res.json(people)
})

app.use(bodyParser.json())

app.post('/delete-person', (req, res) => {
  people.splice(req.body.index, 1)
  res.send('')
})


app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * Added a POST for delete-person, which does exactly that.
 */
