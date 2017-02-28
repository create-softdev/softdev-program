# NPM Versions

What happens when we change the package's implementation?
Does the package consumer get the new implementation? The answer is yes, but it's complicated.

## Upgrading a package

* Let's start by going to the directors-db folder and adding functionality: the `listDirectors`
  function will return the array sorted by the director's last name:

```js
    // Add the following line to the listDirectors to sort according to lastName
    db.sort((l, r) => l.lastName.localeCompare(r.lastName))
```

* Now we'll publish the new versions:

```
$ npm publish
...
npm ERR! "You cannot publish over the previously published version 1.0.0." : create-softdev-directors-db
```

* It failed! Because the version 1.0.0 of the package was published, and we cannot "overwrite" it.
  Once published, a version can NEVER change.
* So we upgrade the version, by changing the `version` field in the `package.json`
  from `1.0.0` to `1.1.0`.
* And..publish:

```sh
$ npm publish
+ create-softdev-directors-db@1.1.0
```

* It's published.
* Now let's go to the packages that uses this:

```sh
$ cd ../use-directors-db
$ node db-operations.js
[ { firstName: 'Stanley', lastName: 'Kubrick' },
  { firstName: 'Steven', lastName: 'Spielberg' },
  { firstName: 'Wes', lastName: 'Anderson' } ]
```

* Do we get the new functionality? No! Why not? Because the package in node_modules is the same as
  before, which is version 1. Let's check:

```sh
$ cat node_modules/create-softdev-directors-db/package.json | grep version
  "version": "1.0.0"
```

* How do we upgrade? Let's try `npm install`:

```sh
$ npm install
npm WARN use-directors-db@1.0.0 No description
npm WARN use-directors-db@1.0.0 No repository field.

$ cat node_modules/create-softdev-directors-db/package.json | grep version
  "version": "1.0.0"
```

* Nope - `npm install` won't do anything if the package is installed.
* Let's do `npm update`:

```sh
npm update
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.1.0

$ cat node_modules/create-softdev-directors-db/package.json | grep version
...
  "version": "1.1.0"
```

* Yup. And if we run it, we get...

```sh
$ node db-operations.js
[ { firstName: 'Wes', lastName: 'Anderson' },
  { firstName: 'Stanley', lastName: 'Kubrick' },
  { firstName: 'Steven', lastName: 'Spielberg' } ]
```

* ...the correct result.

## Semantic Versioning (Semver)

* Let's look at the dependency in the `package.json`:

```sh
{
  "name": "use-directors-db",
...
  "dependencies": {
    "create-softdev-directors-db": "^1.0.0"
  }
}
```

* Each package has a version that will be brought.
* For our package, it's `1.0.0`, so how come it brought us `1.1.0`?
* Let's remove that caret at the beginning of the version, and update again:

```sh
$ # Edit the package.json to remove the caret.
$ npm update
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.0.0
```

* This time it brought 1.0.0! So the caret has a meaning. Let's bring it back and `npm update`:

```sh
$ # Edit the package.json to return the caret.
$ npm update
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.1.0
```

* To understand what's happening here, let's understand **semantic versioning**

### Semantic Versioning explained

* All versions in npm are called semver, and _always_ have the pattern _number_._number_._number_.
* The three numbers are -
  * major version
  * minor version
  * patch version
* A change in each of these numbers means something:
  * A change in the major version means that the api changed. It is called a **breaking change**.
  * A change in the minor version means that there is additional functionality, but no breaking change.
  * A change in the patch version means that there is a bug fix.
* This is why we changed the version previously from `1.0.0` to `1.1.0`. The sort is added
  functionality and hence necessitates a change in the minor version.

### Caret (^) explained

* So when specifying a version, we can specify it in full, or we can specify a range.
* If we specify `1.0.0` in the version in the `package.json`, we are telling npm -
  we want that version, and no other. _Exactly_ that version.
* But if we specify `^1.0.0`, we tell npm to allow any changes in patch, and any changes
  in minor, but never any breaking changes in major.
* caret is the default, and makes sense - why not upgrade to the latest non-breaking change?
* Many developers don't like that and use `~` or just specify the version manually.

### Tilde (~) explained

* Tilde means - accept only changes in patch versions. No minor versions.

