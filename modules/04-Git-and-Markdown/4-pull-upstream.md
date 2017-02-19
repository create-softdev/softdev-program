# Pulling From the Original (Non-forked) Repository

* Sometimes, you want to pull changes from the original repo.
* This is actually _very_ important in the program, as the teachers will constantly be doing changes
  in the program's repo, which you will need to pull.
* But if you pull from `origin`, you are pushing from your fork, not from the original.
* So how do we do this?

## Adding a remote

* We need to add the original repo as a remote.
* We will use the `git remote add` command, to add a remote, which is traditionally called `upstream`

```sh
$ git remote add upstream git@github.com:create-softdev/softdev-program.git
$ git remote -v
origin git@github.com:giltayar/softdev-program.git (push)
origin git@github.com:giltayar/softdev-program.git (fetch)
upstream git@github.com:create-softdev/softdev-program.git (fetch)
upstream git@github.com:create-softdev/softdev-program.git (push)
```

* Now we can pull from the remote we've just created.
* But let's do a small change before we pull, so we can see something.

```sh
$ git pull upstream master
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:create-softdev/softdev-program
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> upstream/master
First, rewinding head to replay your work on top of it...
Fast-forwarded master to 4ebfbeaef97e88c8b61288a26398e79465305e48.
```

* Yup. The change should be in there.
* Is our fork updated?
* Let's update it:

```sh
$ git push origin master # The 'origin master' is optional. We're just making a point here.
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 316 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:giltayar/softdev-program.git
   2046a69..4ebfbea  master -> master
```

Done!
