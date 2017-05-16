# Adding a Person

Time to implement the C in Crud - "Create". We use the ability of the server to add a person to do this.


## [PeopleListComponent](src/components/PeopleListComponent.js)

* We add a link "Add person" at the end of the list. This link points to `/people/new`.
* Interestingly, `/people/1` shows the first person. This is common in Web apps. This enables
  us to use the same page for updating and creating.

## [PersonPageComponent](src/components/PersonPageComponent.js)

### Rendering

* `PersonPageComponent` now has two modes - new and update. We check the mode by
  using `props.match.params.index === 'new'`.
* If it is `new`, then we don't need to load the component, so we change the initial state to `loaded`,
  set the default person fields, and in the `componentDidMount` we don't do the XHR.

### Submitting

* We need to send the server different URLs based on whether it's a new or existing person,
  so we do the `if` and send different URLs.
