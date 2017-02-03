# Pushing and Pulling From a Git Server

Up till now we worked with a Git repository that was local. Now we're going to work against a local
repository which we can pull or push from a remote one, from Github.

## What is Github

* Github is the Git server most of the world uses
* We use it too!
* So you need to join
* You will do it in praxis time, and I am already in
* Github has repositories, which we can "clone", and "push" and "pull" from/to.

## Forking a repo

* Let's start by cloning an [exercise repository](https://github.com/create-oss/renumber-files).
* Clone is creating a local repository that is a _clone_ of a remote repo so we can pull and push it.
* But since we want to push to it, we need to "fork" it.
* (Show how to fork it)

## Cloning a repo

* But this repo we can clone.
* (Show how to get the SSH git URL)
* Now we clone:

```sh
$ cd ~/code
$ git clone git@github.com:giltayar/renumber-files.git
Cloning into 'renumber-files'...
remote: Counting objects: 100, done.
remote: Compressing objects: 100% (44/44), done.
remote: Total 100 (delta 46), reused 95 (delta 41), pack-reused 0
Receiving objects: 100% (100/100), 14.83 KiB | 0 bytes/s, done.
Resolving deltas: 100% (46/46), done.
$ cd renumber-files
* git ls
* cd14b2d (HEAD -> master, origin/master, origin/HEAD) 1.0.4
* eaee635 added the option --exclude
* 77b99dc moved repo from giltayar to create-oss in Github
* bbe09a7 1.0.3
* db64dc5 oops. bin path was incorrect
* 3188ad2 (tag: v1.0.2) 1.0.2
* d4744ac added npm package version badge
* 7dc1f4b (tag: v1.0.1) 1.0.1
* 1d66c47 added travis badge
...
```

* Perfect!

## Push

* We can now add commits, which we want to push to the server

```sh
$ echo foo > foo.txt
$ cat foo.txt
foo
$ git add .
$ git commit -am 'added foo.txt'
[master c26ad6c] added foo.txt
 1 file changed, 1 insertion(+)
 create mode 100644 foo.txt
$ git ls
* c26ad6c (HEAD -> master) added foo.txt
* cd14b2d (origin/master, origin/HEAD) 1.0.4
* eaee635 added the option --exclude
* 77b99dc moved repo from giltayar to create-oss in Github
* bbe09a7 1.0.3
* db64dc5 oops. bin path was incorrect
* 3188ad2 (tag: v1.0.2) 1.0.2
* d4744ac added npm package version badge
* 7dc1f4b (tag: v1.0.1) 1.0.1
* 1d66c47 added travis badge
```

* Note `how master` and `origin/master` are different. What is `origin`?

```sh
$ git remote -v
origin  git@github.com:giltayar/renumber-files.git (fetch)
origin  git@github.com:giltayar/renumber-files.git (push)
```

* Let's push to `origin`

```sh
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 267 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local objects.
To github.com:giltayar/renumber-files.git
   cd14b2d..c26ad6c  master -> master
$ git ls
* c26ad6c (HEAD -> master, origin/master, origin/HEAD) added foo.txt
* cd14b2d 1.0.4
* eaee635 added the option --exclude
* 77b99dc moved repo from giltayar to create-oss in Github
* bbe09a7 1.0.3
* db64dc5 oops. bin path was incorrect
* 3188ad2 (tag: v1.0.2) 1.0.2
...
```

* `origin` means push to origin
* `master` means to push the master branch (which is the only branch you're going to work with)
* And... these are defaults, so we could just have written `git push`
* And we can go to Github to see the new commit and the new file.

## Rejected push

* Now let's simulate another user pushing a file (change the README.md from Github GUI)
* Now let's do another change on `foo.txt`

```sh
$ echo bar > foo.txt
$ git commit -am 'changed foo.txt to "bar"'
[master 0e07d2b] changed foo.txt to "bar"
 1 file changed, 1 insertion(+), 1 deletion(-)
$ git ls
* 0e07d2b (HEAD -> master) changed foo.txt to "bar"
* c26ad6c (origin/master, origin/HEAD) added foo.txt
* cd14b2d 1.0.4
* eaee635 added the option --exclude
* 77b99dc moved repo from giltayar to create-oss in Github
...
$ git push
To github.com:giltayar/renumber-files.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:giltayar/renumber-files.git'
...
```

* Our push got rejected!
* Because we're not synchronized with the server. So let's pull the changes.

```sh
$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:giltayar/renumber-files
   c26ad6c..6fc96dc  master     -> origin/master
First, rewinding head to replay your work on top of it...
Applying: changed foo.txt to "bar"
$ git ls
* fc1c050 (HEAD -> master) changed foo.txt to "bar"
* 6fc96dc (origin/master, origin/HEAD) Update README.md
* c26ad6c added foo.txt
...
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 275 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local objects.
To github.com:giltayar/renumber-files.git
   6fc96dc..fc1c050  master -> master
$ git ls
* fc1c050 (HEAD -> master, origin/master, origin/HEAD) changed foo.txt to "bar"
* 6fc96dc Update README.md
* c26ad6c added foo.txt
...
```

* Notice how, when pulling, git put our commits _after_ the commits from the server. This is called a "rebase".
* Let's pull again...

```sh
$ git pull
Current branch master is up to date.
$ git push
Everything up-to-date
```

* When git has nothing to do, it tells us so.

# Summary

* Forking
* **git clone _url_** - creating a local repository that is a _clone_ of a remote repo
* **git pull** - pulling the changes from the server
* **git push** - pushing our changes to the server
* **push rejection** - when we try to push, and we haven't pulled the latest commits from the server
