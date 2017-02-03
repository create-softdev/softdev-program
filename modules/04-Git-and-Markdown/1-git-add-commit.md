# Add and Commit

## Working dir, stage, commited

* I will create a new repo

```sh
$ git init
Initialized empty Git repository in /Users/giltayar/code/tmp/.git/
```

* Let's create a file: `echo praxis > praxis.txt`
* The file is currently in the **working directory**
* It is *not* yet commited.
* Can we check that?

```sh
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  praxis.txt

nothing added to commit but untracked files present (use "git add" to track)
```

* Yes - it is not commited. It is untracked. (Hence the angry red color!)
* Let's create another one: `echo makes > makes.txt`

```sh
$ git status
...
Untracked files:
  (use "git add <file>..." to include in what will be committed)

  makes.txt
  praxis.txt
...
```

* Two untracked files. Now let's commit _one_ of them.
* To commit a file, we need to move it to **staging**.

```sh
$ git add praxis.txt
$ git status
...
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   praxis.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  makes.txt
```

* It's in staging (and in the working dir). Not yet commited. But when we commit,
  everything in staging will be commited.

* Now let's commit:

```sh
$ git commit
[master (root-commit) 846ded0] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 praxis.txt
```

* Up comes vi, and asks for a commit message. We give it, and `:wq`
* We have a commit!

```sh
$ git log
commit 846ded0d29d407b4c40042932f068959aaea7693
Author: Gil Tayar <gil@tayar.org>
Date:   Fri Feb 3 09:50:32 2017 +0200

    first commit
(END)
```

* Press `q` to exit log.
* A better alternative is:

```sh
$ git ls
* 846ded0 (HEAD -> master) first commit
```

* `ls` is an alias, which you will setup in the praxis time.
* Let's add another file, and add all the files, and commit them:

```sh
$ echo perfect > perfect.txt
$ git add .   # adds all the files (that were modified)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:   makes.txt
  new file:   perfect.txt
$ git commit -m 'you can add the message in the command line' # Note the single quotes
[master 7ac57aa] you can add the message in the command line
 2 files changed, 2 insertions(+)
 create mode 100644 makes.txt
 create mode 100644 perfect.txt
$ git ls
* 7ac57aa (HEAD -> master) you can add the message in the command line
* 846ded0 first commit
```

# Summary

* **git init** - initialize an new repository (not necessary if repo was cloned)
* **git add _file..._** - adds file to staging area
* **git add .** - adds all files (that were modified) to staging
* **git commit -m 'message'** - commits all files in staging areas
* **git status** - see which files are not yet staged, and which are staged
* **git log** - list of all commits
* **git ls** - nicer alias of log
