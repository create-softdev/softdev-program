const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/static/:file', function (req, res) {
  const fileToServe = req.params.file

  fs.readFile(path.join(__dirname, 'assets', `${fileToServe}`), function (err, content) {
    if (err) {
      if (err.code === 'ENOENT') {
        res.sendStatus(404)
      } else {
        res.sendStatus(500)
      }
      return
    }
    res.type('text/html')
    res.send(content)
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening...')
})

/*
* We serve every file in the /assets directory (this time, the file extensions need to be there)
* We've just written a "full" web server!
* returning 404 (err.code === 'ENOENT')
*/
