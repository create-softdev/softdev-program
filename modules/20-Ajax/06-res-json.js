const express = require('express')

const app = express()

app.use('/static', express.static(__dirname))

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/people', (req, res) => {
  res.json(people)
})

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * http://localhost:3000/people
 *
 * And an even easier way!
 */
