# Use People-DB

Find a user that already finished the previous exercise, and use _their_ people-db module.

Take the command-line code that uses the people-db
from [Node Async module](../../16-Node-File-Async/praxis/3-E-people-db.md).

Create a package with that code, and use a people-db package that was already published
(not the one you published!)

Use `as-table` to show the listing in a nice way.

## Hints

1. Again, create a github repo (use-people-db), clone it, and `npm init` it to create a package.
1. Now copy the command-line code that uses the people-db from the node-async module praxis.
1. install the people-db package that was already published (not yours!)
1. `require` it in the command-lin code instead of the `require` that is their.
1. Run it to check that it works.
1. Commit and push.
1. Now change the list command to use the `as-table` module. Don't forget to install the npm module.
1. Commit and push.
1. Now `rm -rf node_modules` and `npm install`. Does your code still run? It should.
