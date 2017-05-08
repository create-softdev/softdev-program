# Testing `members.js`

* Now we can go back to testing our model code.
* This time, we can look in tests that are more complicated.
* Things to notice:
  * We never look "inside" model. We always use functions from the interface
  * "model" is a singleton, so each tests affects the next one. This is problematic, and we usually
    don't do this. But solving this is out of scope.
  * To deal with it, we never assume anything about the model. So if we add a member, we check the count
    is one more than the previous one, and not a specific count.

## Running the tests and fixing the bugs

* When we run the tests, we get a failure on some of them.
* Let's fix it - there's one bug!
* Fixed! The fixed code can also be found in [the next section](,./4-fix-bugs)
