# TodoMVC

We rewrite the Todo we wrote yesterday, to do it with Ajax. We won't implement it all - just the
add and delete.

(Feel free to copy code from the Todo we did yesterday.)

## 1. Create Project

We need to create a project in Github, and an NPM package. You know the drill:

1. Create a Github repo named todomvc (the previous one was called todo).
1. Create an npm package in it (using `npm init -y`) - don't forget to `cd` into the directory before...
1. Commit and push.

## 2. Show a Page with title "Todos"

In this step, we'll create a server (yay! my first real backend program!) that serves a
`/static` folder with all that's in it, which will be a regular HTML with a nice title.

1. Install express
   (dont't forget to use `--save` to save it in the `package.json`))
1. Create `index.js`
1. Use `express.static` to serve the `/static` directory in the project to the `/static` path on the server
1. Create an HTML with a title and an `h1` named Todos.
1. Check it.

There we go - we're starting an incredible journey! Don't forget to breath, commit, and push.

## 3. Import the todo-db and create a `/list` handler

In this step, we'll start importing the todo-db and start using it

1. Install your todo-db. If you followed the rules, it should be named _yourGithubUsername_-todo-db
1. Import it into `index.js`
1. Create a `/list` request handler that returns the json of the todos
1. Each time you render the file, add a todo using the package's `add` function.
   (Just for checking things out - you'll delete it later, right?).
1. You can try it out on the browser by accessing `/list`.

## 5. Render the list

In this step, you'll AJAX to `/list` and client-side render the list.

1. Use XMLHttpRequest to get at the list. You can copy/paste the `util.js` file from the theory
   part and use that.
1. On success: console.log the list - to check that it's OK. If it is:
1. For each todo, create an li underneath the ul, and fill it with the text of the todo.
   Ignore the completed flag for now.
1. On failure - show an error.

You've just shown the list of todos! That's something. Don't forget to breath, commit, and push.

## 6. Add a todo, client-side

In this step, you'll show an input and button which will allow the user to add a todo.

1. At the end of the list, create an input field and a button.
1. When clicking the button, console.log the fact.
1. Now, instead of console.log-ing, ajax a POST to `/add-todo` with an application/json body with the todo, as
   in `{text: _text_from_input_}`.
1. Use the "Network tab" to see that you're sending the correct body. The request should result in an error
   because you didn't yet write the handler.
1. On success of the POST, you should an an `li` with the text of the todo.
1. On failure - show a message.
1. Currently, it should fail and show a message.

Almost there... Don't forget to breath, commit, and push.

## 7. Add a todo, server-side

In this step, you'll add a POST handler, which will add the todo, which will make the client-side
code in the previous step work.

1. Add a POST handler (use `app.post`) on `/add-todo`, which accepts the JSON of the todo
   in the body and adds the todo.
1. Now check the client-code - it should work!

You did it! I'm proud of you! Don't forget to breath, commit, and push.
