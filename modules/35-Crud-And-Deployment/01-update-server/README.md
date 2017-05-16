# Updating the Server

It's nice to have a readonly interface, but we do want a CRUD interface. So let's start with enabling **update***.

* We'll add a "Save" button that will save the person to the database.
* How does the backend support it? We need to send a `PUT` method to `/people/:index`, and the body of the request
  is the new person.
* Let's do it!

## [PersonPageComponent](src/components/PersonPageComponent.js)

### The UI

* We change it to a `<form>`, add a `<button>` and add a `handleSubmit` that handles the `onSubmit` event.
* That's the easy part!

### handleSubmit

* We have three more states: `saving`, `error-saving`, and `saved`.
* We first move to `saving` state.
* XHR, two interesting facts:
  * In the send, we send the body.
  * We _have_ to send a `Content-Type: application/json`, otherwise most servers will do strange things with the body.
  * It's a `PUT` XHR. (OK, three interesting facts!)

### Rendering

* Each of the new states is handled differently.
  * `saving` and `error-saving` are similar - we add a small label below which says what state we are in.
