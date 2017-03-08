const express = require('express')

const app = express()

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/', (req, res) => {
  let html = ''
  html += '<h1>People</h1>'
  html += '<ul>'
  for (const person of people) {
    html += '<li>'
    html += `${person.name} (${person.age})`
    html += '</li>'
  }
  html += '</ul>'

  res.send(html)
})

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * The `person` "Database"
 * Generating HTML dynamically from "database"
 */
