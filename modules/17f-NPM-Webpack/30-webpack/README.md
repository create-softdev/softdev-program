# Webpack

* Webpack is a tool that bundles all modules that require one another into one big JS file.
* So if we do this:

```sh
$ webpack --entry ./main.js --output-filename dist/bundle.js
...
```

* We get the file `dist/bundle.js`
* It is customary to use a `dist` folder
  (short for `distributable`, i.e. the stuff that we need to _distribute_ the software).
* It is customary to call it either `dist/bundle.js` or `dist/main.js`.

## How does Webpack work?

* It starts with the entry point defined in `--entry` and finds all the modules that it `require`-s.
  It adds them to a file (defined with , along with the entry point.
* Then it recursively does this on all the `require`-ed module.
* Thus we finally have a file with **all** the modules bundled in.
* Which we can `<script src>`

## How do I bring in Webpack?

* So where does webpack sit? It sits in a repository of JavaScript libraries called NPM.
* You can see it [here](https://www.npmjs.com/).
* Webpack is just one of the installations there.
* To install it on your computer, do...

```sh
$ npm install --global webpack
...
```

* This is a **global** installation of webpack. You can now use it thus:

```sh
$ webpack --entry ./main.js --output-filename dist/bundle.js
...
```

* But nobody works this way. They prefer using "packages", which we'll see in the next section
