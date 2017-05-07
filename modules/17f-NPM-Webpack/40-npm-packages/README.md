# NPM Packages

* An NPM Package is what is in the npm repository.
* We have already seen one - Webpack.
* When we "installed" webpack, we were installing the webapack **package**.

## What is an NPM Package?

* It is a directory
* The root of the directory must include a file named `package.json`. A minimal example of a package:

```json
{
  "name": "the-name-of-the-package",
  "version": "1.0.1"
}
```

* The name is a name unique to the npm registry.
* The version is the version of the package.

## Dependencies

* Each package _depends_ on other packages, i.e. uses the code in other packages.
* To define the dependencies, we add a `dependencies` or `devDependencies` section:

```json
{
  "name": "the-name-of-the-package",
  "version": "1.0.1",
  "devDependencies": {
    "webpack": "^2.4.1"
  }
}
```

* (We will talk later about the difference between `dependencies` or `devDependencies`.)
* The above package depends on the Webpack package. The `2.4.1` means that it wants this version. The `^` means
  that it can work with any version of the pattern `2.x.x`.
* How do we "get" the dependencies"?
* `npm install`
* Where does it install "webpack" (and any other dependency)? In a folder named `node_modules`.

## Adding Dependencies

* To add a dependency, you can:
* Write it by hand in `devDependencies`, or...
* Use `npm install --save-dev _packageName_`.
* Example `npm install --save-dev webpack`.

## Using Webpack from Node Modules

* To use it, we do this:
* `./node_modules/.bin/webpack --entry ./main.js --output-filename dist/bundle.js`
* This creates the file `dist/bundle.js` as we discussed.
