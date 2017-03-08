
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

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
  html += `
<div>
  <a href='/static/add-person'>add person</a>
</div>
  `
  res.send(html)
})

app.use('/static', express.static(path.join(__dirname, 'more/people-app'), {extensions: ['html']}))

app.use(bodyParser.urlencoded())

app.post('/add-person', (req, res) => {
  people.push({name: req.body.name, age: req.body.age})

  res.send('<h1>Person added!</h1>')
})

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * Added the POST request handler to add a person.
 * Works!
 * But the POST result HTML doesn't make sense.
 * What we want is to redirect to the people page. Next sample will show this.
 */
