# Cheat Sheet for Node File I/O (Synchronous)

* Require-ing the fs module

```js
const fs = require('fs')
```

* **`fs.readFile`**`(`_`fileName`_`, [{encoding: 'utf-8'}])`: Returns a string with the contents of the file _fileName_
* **fs.writeFile**(_fileName, _content_): Writes the content into the file _fileName_
*
