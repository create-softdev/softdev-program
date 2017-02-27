# Installing a published package

* Let's create an application that uses the npm package we just published.

## Creating an application

* Any code that _uses_ a package, must also be a package, so let's create one:

```sh
$ mkdir use-directors-db

$ cd use-directors-db

$ npm init -y
Wrote to /Users/.../softdev-program/modules/17-NPM/workfiles/use-directors-db/package.json:
...
```

* Are we going to publish it? No. But to _use_ other packages, you must be a package too.

## Adding a dependency

* Let's install the package we just created - `create-softdev-directors-db`

```sh
$ npm install create-softdev-directors-db
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.0.0
...

$ ls node_modules
create-softdev-directors-db
```

* It's there. But let's look at the `package.json`:

```sh
$ cat package.json
{
  "name": "use-directors-db",
  "version": "1.0.0",
  ...
}
```

* No `dependencies` field! This means that if we delete the `node_modules` folder, or not
  publish it to git, then our team members will need to
  remember to do `npm install create-softdev-directors-db`.
* We *never* upload `node_modules` to git (why? never mind now, but believe me...)
* So this is not good.

## Adding a dependency into the `package.json`

* To solve it, always do:

```sh
$ npm install --save create-softdev-directors-db
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.0.0
...
```

* The `--save` option will save the information in the `package.json`:

```sh
$ cat package.json
{
  "name": "use-directors-db",
...
  "dependencies": {
    "create-softdev-directors-db": "^1.0.0"
  }
}
```

* So now, if we delete the `node_modules` folder, we can just `npm install`, and all will be well:

```sh
$ rm -rf node_modules

$ npm install
use-directors-db@1.0.0 /Users/giltayar/code/softdev-program/modules/17-NPM/workfiles/use-directors-db
└── create-softdev-directors-db@1.0.0

npm WARN use-directors-db@1.0.0 No description
npm WARN use-directors-db@1.0.0 No repository field.

$ ls node_modules
create-softdev-directors-db
```

