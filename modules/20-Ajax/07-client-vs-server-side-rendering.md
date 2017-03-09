# Client-side Rendering vs. Server-side Rendering

* Contrast:
  * [Client-side rendering](04-accessing-people-from-html.html)
  * [Server-side rendering](../19-Node-Express/14-a-people-app.js)
* In both cases, there is dynamic generation of HTML.
* In both cases, the data sits on the server
* In server-side rendering, the data stays on the server and is rendered to the client.
* In client-side rendering, the data "travels" to the client and is rendered there.
* All web apps today use client-side rendering
  * (Yes, the best ones _also_ render on the server, but we will learn that when we learn React)

## Data operations in server-side rendering

* What about data operations? (e.g. deleting a person)
* In server-side rendering, we posted to the "action" that deletes the person, and then
  redirected to the people page, which re-rendered the page again.
* This is called a "round-trip" - the page is fully re-rendered.
* For simple pages, that's OK. But what if the page is HUGE? A re-render can take a couple of seconds!
* But all we _should_ have done, is just delete the `<li>`!

## Data operations in client-side rendering

* How do we deal with data operations using client-side rendering?
* When clicking on delete, we XHR to the server and send it a delete request.
* When the server returns with OK, we delete the LI.
* Let's implement that.
