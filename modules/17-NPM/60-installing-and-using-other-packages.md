# Installing and Using Open Source Packages

The NPM registry is the largest registry in the world! It probably has whatever you need! You need to
learn to use it.

Let's do so.

## Finding a package that prints nice tables

* Let's say we want to print the director's table nicely.
* We _could_ write it ourselves, but it's not nice logic.
* Let's look for a nice package. We'll got to the [NPM registry](https://www.npmjs.com).
* In the search, we'll look for [print table](https://www.npmjs.com/search?q=print%20table&page=1&ranking=optimal)
* Let's look at the first option (well, today it's the first...) -
  [as-table](https://www.npmjs.com/package/as-table)
* Looks nice... let's try before we buy

## Trying a package before installing it in `package.json`

* To try, we just `npm install` without the `--save`:

```sh
$ npm install as-table
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── as-table@1.0.11
...

$ node # we use node in the interactive mode!
> const asTable = require('as-table')
undefined
> asTable([{name: 'Kubrick', text: 'something'}, {name: 'Shmubrik', text: 'foo'}])
'name      text     \n-------------------\nKubrick   something\nShmubrik  foo      '
```

* Looks good! We can use it.
* If it wasn't good, we would do `npm uninstall as-table` and continue to the next package in the registry.

## Installing and using it

* Now install it "forever" using `npm install --save as-table`. This will put it in the dependencies.
* To use, it, let's change the `console.log` in the `db-operations.js` to:

```js
const astTable = require('as-table')
//...

  console.log(asTable(directors))
```

* Let's run it:

```sh
$ node db-operations.js
firstName  lastName
--------------------
Stanley    Kubrick
Steven     Spielberg
Wes        Anderson
```

* Yay!
