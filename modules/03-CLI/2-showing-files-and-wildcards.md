# Showing Files

* How can we see a file?
* `cat hello.txt`
* Yes! But why cat? We'll see...
* Now let's create another file:
* `echo Goodbye, cruel world > goodbye.txt`
* `cat hello.txt goodbye.txt`
* Yes - `cat` accepts multiple parameters and _concatenates_ them all.
* Which is why it's called `cat`.
* So how does one copy a file using cat?
* `cat hello.txt > hello2.txt`
* Did it work?
* `cat hello2.txt`

## Seeing it in the GUI

* Note that these files "live" in the GUI.
* Open home folder and look at the files.

## Wildcards

* `cat *.txt`
* Same result
* How? Does `cat` understand the "*" wildcard?
* No - the shell does. It expands `*.txt` to `hello.txt hello.txt goodbye.txt`, and this is what `cat` receives as parameters
* Does it work with `echo`? Yes
* `echo *.txt` prints `hello.txt hello2.txt goodbye.txt`
* You can also do:
  * `echo *`
  * `echo h*`
  * `echo *e*`
  * `echo *el*`

## Listing files

* Does it work with `ls`?
* `ls *.txt`. Yup, it works
* Exactly like echo... so why do we need `ls`?
* for this:
* `ls -l *.txt`

## Summary of commands

* `cat file...` - show files one after another
* `cat file >another-file` - copy one file into another
* Wildcard expansion with `*` and `?`
* `ls file...`
* `ls -l file...`
