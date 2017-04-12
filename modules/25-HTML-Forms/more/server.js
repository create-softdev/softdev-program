const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const escape = require('lodash.escape')

const app = express()

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/data-post', (req, res) => {
  res.type('text/html')
  res.send(`
    <div>You sent me the name <strong>${escape(req.body.name)}</strong>
    with an age of <strong>${escape(req.body.age)}</strong></div>
  `)
})

app.get('/data-get', (req, res) => {
  res.type('text/html')
  res.send(`
    <div>You sent me the name <strong>${escape(req.query.name)}</strong>
    with an age of <strong>${escape(req.query.age)}</strong></div>
  `)
})

app.post('/data-json', (req, res) => {
  res.send('OK')
})

app.listen(3000,
  () => console.log(`Listening on port 3000...`))
