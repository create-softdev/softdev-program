# TodoMVC

We will start writing the TodoMVC in a light manner here, so that in Project Wednesday, things will be clearer.

Don't worry, we'll do it slowly.

## 1. Create Project

We need to create a project in Github, and an NPM package. You know the drill:

1. Create a Github repo named todo.
1. Create an npm package in it (using `npm init -y`)
1. Commit and push.

## 2. Show a Page with title "Todos"

In this step, we'll create a server (yay! my first real backend program!) that shows the title "Todos"

1. Install express
   (dont't forget to use `--save` to save it in the `package.json`))
1. Create an index.js that:
   1. imports express
   1. Adds a "get handler" (`app.get`) to the path `/` that uses `res.send` to return the HTML `<h1>Todos</h1>`
1. Run it, and check that it works.

You're on your way! Don't forget to breath, commit, and push.

## 3. Read the page from index.html

In this step, we'll use ejs to show the same page we showed earlier.

1. Install ejs
   (dont't forget to use `--save` to save it in the `package.json`))
1. Import it into `index.js`
1. Create a file `index.ejs`, with regular HTML, and the H1 from the previous step
1. Instead of rendering a string, create the string using ejs's `render`
   (see [this](../170-e-people-app.js)).
1. Run it, and check that it works.

Don't forget to breath, commit, and push.

## 4. Start using the todo-db

In this step, we'll start importing the todo-db and start using it

1. Install your todo-db. If you followed the rules, it should be named _yourGithubUsername_-todo-db
1. Import it into `index.js`
1. Each time you render the file, add a todo using the package's `add` function.
1. Also, list the todos using the `list` function and `console.log` it, just to check that all is OK.

## 5. Render the list

In this step, we'll use ejs to render the list.

1. Same same, but instead of `console.log`-ing the list, pass it to the template as `todos`, and
   render it using ejs's `<%...%> (again, see [this](../170-e-people-app.js)).
1. Check that it works. Now remove the code that adds a todo.
1. Check again that the page renders an empty list.

Don't forget to breath, commit, and push.

## 6. Add a link and an add-todo page

In this step, we'll add a link to the todos page, that links to a static todo page.

1. Add the link to `index.hjs`, pointing to the page `/static/add-todo`.
1. Add the page `static/add-todo.html` - let's start with just a simple `<h1>Add todo</h1>`.
1. Serve it using `express.static` (see [this](../170-e-people-app.js) to remind yourself how).
1. Check that it works by following the link from the main page.

## 7. Create a real add-todo.html page

1. Now create the real add-todo:
   1. A `<form>` with a "Todo:" input field (name="text")
   1. A submit button in the form.
   1. The form should POST to the URL `/add-todo`.
      (that currently points to nowhere, so you should get a 404 when you submit)
1. Check it.

You're getting there! Don't forget to breath, commit, and push.

## 8. Responding to the /add-to action

1. Back in your `index.js`, add a POST request handler on `/add-todo` (use `app.post`)
1. The request handler should just return a `<h1>todo added!</h1>`.
1. Check it. When submitting the todo, you should see a "todo added". Of course, no todo is
   yet added.

## 9. Reading the form parameter

1. Add a `body-parser` for urlEncoded body's (i.e. form submissions).
   See [this](../170-e-people-app.js) to remind yourself how.
1. In the POST request handler of the `/add-todo`, `console.log` the parameter `text` that
   was sent by the form, to check that you got it correctly.

## 10. Adding the todo in the /add-to handler

1. Now, in the request handler of the `/add-todo`, use the `todo-db` to add a person, and _then_,
   send a "todo added!"
1. Check that it works by adding a todo, and then going back to list page to see it.

Almost done! Don't forget to breath, commit, and push.

## 10. Redirecting back to list page after adding person

1. Instead of showing "Todo added!", redirect back to `/` in the POST request handler.
1. Check it.

You made it! Don't forget to breath, commit, and push.

## Bonuses

### Delete

Add a "delete" button on each todo.

General explanation:

* The delete button should be in each `<li>`.
* It should be surrounded by a form with `method="POST"`. The form should include an input
  with the value of the `id` of the todo - so that the request handler will receive it.
  To make it hidden, use `<input type=hidden>` (yes, it was invented just for this case).
* The post should lead to a request handler (e.g. `/delete-todo`) that deletes
  the todo with the id that was received, and redirects back to the list.

### Complete

Add a "complete" button on each todo, which hides the todo from the list

General Explanation:

* Similar to the delete, add a button "complete" that posts to `/complete-todo`
* The req handler should read the todo, set the complete to true, and update it using `todo-db`.
* Change the main page, to filter out the todos that were completed.
