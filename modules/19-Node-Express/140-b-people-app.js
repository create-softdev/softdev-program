const express = require('express')
const path = require('path')

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

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/**
 * Link to add person page - which is static, so we use express.static.
 */
