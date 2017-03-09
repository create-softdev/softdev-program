const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/hello', function (req, res) {
  fs.readFile(path.join(__dirname, 'assets/simple/hello.html'), function (err, content) {
    if (err) {
      res.sendStatus(500)
      return
    }
    res.type('text/html')
    res.send(content)
  })
})

app.listen(3000, function () {
  console.log('Listening...')
})

/*
* res.sendStatus
* We've just written a web server!
*/
