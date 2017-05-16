# Preparing For Production

* If we look at the `dist/bundle.js` file, we find something horrible - it is ~1MB large.
  That is huge, for such a small program.
* How do we optimize? using webpack.


## [package.json](package.json)

* We change the `build` script, thus:

```js
  "scripts": {
    "build": "webpack -p --progress",
    "build:dev": "webpack --progress",
    ...
  },
```

* Notice we split it into a "production" build and a "dev" build:
  * The dev build is used for developing
  * production is for the final user.
* The production build uses `-p`. This will instruct webpack to do lots of optimizations, among them:
  * Removing modules that are never used
  * "uglifying the code", which means packing it into very little space.

### [.babelrc](.babelrc)

* We changed it to compile ES2015 to ES5. Why?
* Because it seems that Uglify doesn't support some of ES2015's syntax.
* That's life in the bleeding edge...

## Checking the Results

* After running `npm run build`, we get... 211K! Much better, and most of what we can hope for.
* Optimization is an arcane science, so there is lots more to learn, but this is a good start.
