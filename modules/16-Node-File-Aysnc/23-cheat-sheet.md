# Cheat Sheet for Node File I/O (Asynchronous)

## Importing the fs module

```js
const fs = require('fs')
```

## Reference

* [Node reference for fs module](https://nodejs.org/api/fs.html)

## File Operations

* **fs.readFile**(_filename_, [{encoding: 'utf-8'}], (err, content) => {...}):
  calls back with the contents of the file _filename_
* **fs.writeFile**(_filename_, _content_, err => {...}):
  writes the content into the file _filename_
* **fs.unlink**(_filename_, err => {...}): deletes the file _filename_
* **fs.stat**(_filename_, (err, stats) => {...}): calls back with an object with information about file:
  * `isDirectory()`: whether the item is a directory
  * `isFile()`: whether the item is a file
  * `mtime`: the `Date` of last modification

## Directory Operations

* **fs.readdirSync**(_dirname_): an array with the names of the items (files and directories)
  in the directory

## Command Line Arguments

* ***process.argv***: an array of all commnd line arguments.
  * The first element will always be `node`
  * The second element will always be the name of the script running.
  * The third and onward are the regular arguments

## Modules

* Every JS file is a module.
* Each module has its own variables
* Each module exports the "exports" variable.

### Exporting

* **exports._name_ = _value_**: exports the variable _name_ with the value _value_

### Importing

* **const _var_ = require('_relative_path_to_module_')**:
  imports the exports variable with all the names.
* **_var_._name_**: use the _name_ from the import
