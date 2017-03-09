const express = require('express')

const app = express()

app.get('/add', function (req, res) {
  res.send((parseInt(req.query.a, 10) + parseInt(req.query.b, 10)).toString())
})

app.listen(3000, function () {
  console.log('Listening...')
})

/*
* curl 'http://localhost:3000/add?a=4&b=5'
* req.query
*/
