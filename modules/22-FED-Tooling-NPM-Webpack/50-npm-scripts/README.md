# NPM Scripts

* Any change in the JavaScript will need a rebuild, and it's awkward to always write that `webpack` line.
* Instead, we add a "script" to the `package.json`:

```json
{
  "name": "30-webpack-npm-jsx",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --entry ./main.js --output-filename dist/bundle.js"
  },
  ...
```

* Now we can do this: `npm run build` to run the build script.
* Note how we don't need to write `./node_modules/.bin` because this is automatically added to PATH when using
  a `package.json` script.
* Remember: **Always run the build on each change of the file**

## Watching the Code

* But rebuilding - we all forget
* So we add a `watch` script:

```json
{
  "name": "30-webpack-npm-jsx",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --entry ./main.js --output-filename dist/bundle.js",
    "watch": "webpack --watch --entry ./main.js --output-filename dist/bundle.js"
  },
  ...
```

* same line as `build`, but we add a `--watch`.
* Running it will build everything, but will continue watching the files and rebuild on change.
