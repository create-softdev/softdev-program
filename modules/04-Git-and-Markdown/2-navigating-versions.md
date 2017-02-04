# Navigating Versions

* Let's create another version where the file `praxis.txt` is different
* Let's add and commit it - we can do it in one step with `commit -a`

```sh
$ echo practice > praxis.txt
$ git commit -am 'changed file praxis.txt'
[master 1f5e9b1] changed file praxis.txt
 1 file changed, 1 insertion(+), 1 deletion(-)
$ git ls
* 1f5e9b1 (HEAD -> master) changed file praxis.txt
* 7ac57aa you can add the message in the command line
* 846ded0 first commit
```

* We have another version:
* if we `cat praxis.txt` we get `practice`.
* Let's "go back to the previous version". We do this by specifying the "hash" or "sha1" of the commit.

```sh
$ cat praxis.txt
practice
$ git checkout 7ac57aa
Note: checking out '7ac57aa'.

You are in 'detached HEAD' state...
$ git ls
* 7ac57aa (HEAD) you can add the message in the command line
* 846ded0 first commit
$ git ls master
* 1f5e9b1 (master) changed file praxis.txt
* 7ac57aa (HEAD) you can add the message in the command line
* 846ded0 first commit
$ cat praxis.txt
praxis
```

* Notice how the `HEAD` moved? And yet `master` remained in place?
* Now let's go back to the head of the branch:

```sh
$ git checkout master
$ git ls
* 1f5e9b1 (HEAD -> master) changed file praxis.txt
* 7ac57aa you can add the message in the command line
* 846ded0 first commit
$ cat praxis.txt
practice
```

# Summary

* **git commit -am '_message_'** - add and commit files (only files that changed, not untracked files)
* **git checkout _sha1_** - move HEAD to another version
* **git checkout master** - move HEAD back to the top of the branch
