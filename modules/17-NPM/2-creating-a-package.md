# Creating a package

* Now that we've seen the overview, let's understand how to create a package.

## Creating a package

* We'll build a package including the director's db code. We're turning the module into a package.
* A package is a folder. So let's create a folder.

```sh
$ mkdir create-softdev-directors-db
_no_output_

$ cd create-softdev-directors-db
_no_output_

```

* Now we need to create the `package.json`. We could do it manually, or just use `npm init`:

```sh
$ npm init
...
name: (create-softdev-directors-db)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/create-softdev-directors-db/package.json:
...
Is this ok? (yes)
```

* (Press _Enter_ on all the questions)
* Alternatively, just do `npm init -y` to answer yes to all questions.
* That's it - you've created a package.

## Creating the package code

* Let's copy the code from the previous module to the entry pont - `index.js`.
* The entry point is `index.js`, although you can change it by changing the `main` field in `package.json`.

```sh
$ cp ../../../16-Node-File-Aysnc/workfiles/directors-db.js index.js
_no_output_
```

* That's it - we have a package!
