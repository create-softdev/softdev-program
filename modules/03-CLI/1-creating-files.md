# Creating Files

* Open a terminal (Mac), or "Git Bash" (Windows)
* First command:
* `ls`
* A list of files in our home folder
* Now let's say hello:
* `echo hello, world`
* echo can accept multiple parameters. It just **prints** them in the terminal.
* What are the two parameters? "hello," and "world". Because space is the separator.
* Now let's create a file:
* `echo hello, world > hello.txt`
* See that `>`? Say "into". It says - instead of printing to a terminal, "print" it "into" a file.
* It will override anything that was in the file. There is no going back!
* Beware! The CLI is *dangerous*.
* Also, notice how the command outputted *nothing*. This is common in Unix. If nothing is printed out,
  then everything's OK.
* What will `ls` show? It will show both `praxis` and `hello.txt`.

# Summary

* **ls** - list files
* **echo _parameters_...** - echo parameters to terminal
* **echo _parameters_ > _file_** - create file with parameters as text
