# Refactoring Existing People App Code

## The need for modularization

Problems with having all code in one JS file:

1. We can't have too many lines of code in one file. It gets unwieldy very fast.
1. If you have multiple developers working on the same code, it's a bad idea to have them all
   work on the same file.
1. All functions and variables are on the **global scope** - on window, and they may clash with one another,
   espeicially if multiple developers are working together.

## Modules

* Most programming languages have modules - separate files where each file has their own scope, and which
  can "export" stuff that other modules can "import".
* JavaScript has two ways to do modules:
  * CommonJS modules
  * ES6 Modules
* They are very similar.
* We will first learn CommonJS modules.

But before that, let's modularize the code without using CommonJS. We just use multiple `<scriptsrc>`-s.

* Separated into app javascripts (main and people-*) and util.js
* util - helper functions that are not concerned specificall with people
* main/people-* - the functions that are app/people-related
* Separation between "view" and "model"
* Our view adds dom elements and attaches listeners
* Listeners call model code, which updates server and calls view to update the view.
