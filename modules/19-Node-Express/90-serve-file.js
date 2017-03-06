const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/hello', function (req, res) {
  fs.readFile(path.join(__dirname, 'assets/hello.html'), function (err, content) {
    if (err) {
      res.sendStatus(500)
      return
    }
    res.type('text/html')
    res.send(content)
  })
})

app.listen(process.env.PORT || 3000, {foo: 4}, function () {
  console.log('Listening...')
})

/*
* res.sendStatus
* We've just written a web server!
*/
