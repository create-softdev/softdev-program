# NPM Packages

* Overview of what NPM packages are, how they look, and how to connect them.

## What is an NPM package?

1. It is a directory with a `package.json` file and an entry JavaScript module, which usually exports stuff.
1. It is published to the NPM "registry", which is a global place where all NPM packages reside
1. It can be installed by another package, which means it can be used.

## Example

First - one package - [simple-package](more/simple-package).

* Its [package.json](more/simple-package/package.json), which has just a `name` and a `version` (required fields)
* Its name is `create-softdev-simple-package`.
* Its entry point, [index.js](more/simple-package/index.js), which exports
  one function `theAnswerToLifeTheUniverseAndEverything`.
* It is published in the npm registry, [here](https://www.npmjs.com/package/create-softdev-simple-package)
* The name must be unique in the npm registry, which is why the name of this package is so elaborate

Now, another package [another-package](more/another-package), which uses the first package.

* Its [package.json](more/another-package/package.json), also has a `name` and a `version`.
* But it also has a `dependencies` field, which includes `create-softdev-simple-package`.
* It also includes `chalk`, which is a nice package that brings color to your console output.
* And it also includes `moment`, which is the most popular package for working with dates and times.
* That is why its `index.js` can `require` these package.
  * The require does not start with a `.`, so node knows to look in a special directory called `node_modules`
    for it.
* But it's not there!
* To install the dependencies in `node_modules`, do:

```sh
$ npm install
create-softdev-use-another-package@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/more/another-package
├─┬ chalk@1.1.3
│ ├── ansi-styles@2.2.1
│ ├── escape-string-regexp@1.0.5
│ ├─┬ has-ansi@2.0.0
│ │ └── ansi-regex@2.1.1
│ ├── strip-ansi@3.0.1
│ └── supports-color@2.0.0
├── create-softdev-simple-package@1.0.1
└── moment@2.17.1
```

Now we can run the file:

```sh
$ node index.js

42 # (in green)
69 years ago have passed since the declaration of independence
```

* Is this package published? No. But it can be.
* But it doesn't have to be! It _consumes_ other packages, but is not _consumed by any package.

