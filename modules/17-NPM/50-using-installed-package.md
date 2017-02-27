# Using the Installed Package

We installed the package. Now let's use it.

## Using the code we have

* First, we copy the code from the module that demos it:

```sh
cp ../../../16-Node-File-Aysnc/21-db-operations.js db-operations.js
```

* But we want to use the package we use, so let's edit the file, and do

```js
const directorsDb = require('create-softdev-directors-db')
```

* Does it run?

```sh
* node db-operations.js
[ { firstName: 'Stanley', lastName: 'Kubrick' },
  { firstName: 'Steven', lastName: 'Spielberg' },
  { firstName: 'Wes', lastName: 'Anderson' }
```
* Yes!

## How Node `require` uses `node_modules`

* Inside the function `require` is the magic that makes things work.
* `require` looks at the path it gets.
* If it starts with a `.`, then it's a relative path, and it resolves it relative to current file.
* Otherwise, it looks in the `node_modules` directory for a directory with the same name, reads
  the `package.json` of that package, and the `main` is used as the file to import.
* If there is no `main` field, it uses `index.js`.
* (It's much _much_ more complicated than that - but this is a good first approximation.)
