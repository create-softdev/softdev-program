
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const handleBars = require('handlebars')
const fs = require('fs')

const app = express()

const people = [
  { name: 'Danny', age: 33 },
  { name: 'Sunny', age: 22 }
]

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'more/people-app/people.hbs'), {encoding: 'utf-8'}, (err, content) => {
    if (err) return res.sendStatus(500)

    const template = handleBars.compile(content)
    const renderedPage = template({ peopleList: people })

    res.send(renderedPage)
  })
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
 * Handlebars template is now an external file
 * We need to read it, and _then_ use it.
 */
