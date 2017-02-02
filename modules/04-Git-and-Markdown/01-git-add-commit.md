# Add and Commit

## Working dir, stage, commited

* I will create a new repo

```sh
$ git init
```

* Let's create a file: `echo praxis > praxis.txt`
* The file is currently in the **working directory**
* It is *not* yet commited.
* Can we check that?

```sh
$ git status
```

* Yes - it is not commited. It is untracked. (Hence the angry red color!)
* Let's create another one: `echo makes > makes.txt`

```sh
$ git status
```

* Two untracked files. Now let's commit _one_ of them.
* To commit a file, we need to move it to **staging**.

```sh
$ git add hello.txt
$ git status
$ git ls
```

* It's in staging (and in the working dir). Not yet commited. But when we commit,
  everything in staging will be commited.

* Now let's commit:

```sh
$ git commit
```

* Up comes vi, and asks for a commit message. We give it, and `:wq`
* We have a commit!

```sh
$ git log
```

* Press `q` to exit log.
* A better alternative is:

```sh
$ git ls
```

* `ls` is an alias, which you will setup in the praxis time.
* Let's add another file, and add all the files, and commit them:

```sh
$ echo perfect > perfect.txt
$ git add .   # adds all the files (that were modified)
lalalalal
asfasdfasdf
$ git status
$ git commit -m 'you can add the message in the command line' # Note the single quotes
$ git ls
```

# Summary of commands

* **git init** - initialize an new repository (not necessary if repo was cloned)
* **git add _file..._** - adds file to staging area
* **git add .** - adds all files (that were modified) to staging
* **git commit -m 'message'** - commits all files in staging areas
* **git status** - see which files are not yet staged, and which are staged
* **git log** - list of all commits
* **git ls** - nicer alias of log
