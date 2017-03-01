# Create the Package From People DB

Create a package from the people DB code you created
in the [Node Async module](../../16-Node-File-Async/praxis/3-E-people-db.md). After creating it,
you should publish it to npm as a `_your_npm_user_name_-create-people-db`.

Make sure that the package is tested by adding code that tests it.

## Hints

1. Start by registering to [npmjs](https://npmjs.com). To avoid your confusion, your github
   username and npm username should be the same. But they don't have to be.
1. An NPM package is usually in a git repo of its own, so create a repo with the same _your_npm_user_name_
   as your package, i.e. `_your_npm_user_name_-create-people-db`.
1. Clone the git repo locally to your work directory.
1. Initialize the package using `npm init`.
1. Now copy the people db code from the node async module praxis. You should copy it to index.js.
1. To test it, create a directory `test` and add a node file (`test-people-db.js`) that `require`-s the people-db module,
   and adds some people, and then lists them. Check that the list has the correct people.
   (Remember, use `assert.deepStrictEqual` for that).
1. Run the test to verify that your `people-db` code is fine.
1. Now you almost have a package! Add an `.npmignore` with the appropriate lines so that the `test`
   directory won't be part of the published package.
1. Now `npm publish` (don't forget to `npm login` first).
1. Go to [npmjs](https://npmjs.com) to check that it's there.


## Bonus

Write a nice `README.md` describing how to use your people-db package. You can get inspiration from
these examples:

* [as-table](https://github.com/xpl/as-table)
* [chalk](https://www.npmjs.com/package/chalk)
* [mkdirp](https://www.npmjs.com/package/mkdirp)
