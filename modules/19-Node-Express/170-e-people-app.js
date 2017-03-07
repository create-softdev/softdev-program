
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const handleBars = require('handlebars')

const app = express()

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/', (req, res) => {
  const page = `
<h1>People</h1>
<ul>
  {{#each peopleList}}
    <li>
      {{name}} ({{age}})
    </li>
  {{/each}}
</ul>
<div>
  <a href='/static/add-person'>add person</a>
</div>
  `
  const template = handleBars.compile(page)
  const renderedPage = template({peopleList: people})

  res.send(renderedPage)
})

app.use('/static', express.static(path.join(__dirname, 'more/people-app'), {extensions: ['html']}))

app.use(bodyParser.urlencoded())

app.post('/add-person', (req, res) => {
  people.push({name: req.body.name, age: req.body.age})

  res.set('Location', '/')
  res.sendStatus(302)
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/**
 * Using "handlebars" - a template language
 * http://handlebarsjs.com/
 * Easy to understand - you can read it yourself.
 */
