
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/', (req, res) => {
  const page = `
<h1>People</h1>
<ul>
  <% for (const person of peopleList) { %>
    <li>
      <%= person.name %> (<%= person.age %>)
    </li>
  <% } %>
</ul>
<div>
  <a href='/static/add-person'>add person</a>
</div>
  `
  const renderedPage = ejs.render(page, {peopleList: people})

  res.send(renderedPage)
})

app.use('/static', express.static(path.join(__dirname, 'more/people-app'), {extensions: ['html']}))

app.use(bodyParser.urlencoded())

app.post('/add-person', (req, res) => {
  people.push({name: req.body.name, age: req.body.age})

  res.set('Location', '/')
  res.sendStatus(302)
})

app.listen(3000, function () {
  console.log('Listening...')
})

/**
 * Using "ejs" - a template language
 * http://ejs.co/
 * Easy to understand - you can read it yourself.
 */
