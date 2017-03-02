# Mission

This exercise is the start of writing the backend for the TodoMVC application. You will build an npm
package that will enable storing the Todos of the user.

## Requirements

* Write and publish an npm package named _your_github_username_-todo-db
* It should export the following functions:
  * (`cb` in the following text means the reguale NodeJS style callback)
  * `initializeDatabase(dir, cb)`: initialize the database. Create the db file in the specified directory.
  * `addTodo(text, cb)`: add a todo at the end. The todo will have the text.
  * `deleteTodo(index, cb)`: deletes the todo at the index.
  * `listTodos(cb)`: callbacks with an array of objects {text: string, completed: boolean} describing the
    todos, in the order added.
  * `toggleComplete(index, cb)`: toggles the completed state
    (i.e. from false to true and from true to false) of the todo, and callbacks with the new state.
* It should be fully tested:
  * A file `test-db.js` should be created in the `test` directory.
  * It should import the module you created above, and test it.
  * An example of a test - initializeDatabase, add some todos, then use listTodos to see whether they
    were added. Afterwards, it should delete some todos, and use listTodos to see whether they were
    deleted. Finally, it should toggle some, and use listTodos to see whether they were toggled.
  * If any of these checks failed, it should throw, as usual.
  * To create a temp directory, use `fs.mkdtemp`
    (see [documentation](https://nodejs.org/api/fs.html#fs_fs_mkdtemp_prefix_options_callback))

## Steps

1. Create the package.
1. Create the main file, and export two functions (initializeDatabase and addTodo) that should do nothing
   as of yet.
1. Create a directory `test`, and add the file `test-db.js`. It should import the main file,
   and call the functions. Run it to see that all is OK in terms of importing the main file.
1. Now write `initializeDatabase`. Call it from the test, and check manually that the db file was created
   correctly. Use the current directory ('.') to pass to `initializeDatabase`.
1. Now write `addTodo`. Call it from the test, after you called `initializeDatabase`. Check
   that the file was updated correctly.
1. Don't forget to commit and push your code from time to time.
1. Now write `listTodos`. Call it from the test, after you called `initializeDatabase` and `addTodo`.
   `console.log` the result to see that it's OK. Now, instead of `console.log` use the regular
   `assert.deepStrictEqual` to check the result.
1. Now instead of one todo, add 2-3 more and checks the result.
1. Now write `deleteTodo` and test it in the existing test.
1. Now write `toggleComplete` and test it in the existing test.
1. Finally, use `mkdtemp` to initialize the database with a temporary directory.
1. Commit, push, and publish!

## Bonus

* Add the package to [Travis](https://travis-ci.org/) - a site that tests your packages every time
  you push them.
* Write a nice `README.md` for the package.
