Real World Git & Markdown
=========================

Mission
--------

Really use Git, while learning Markdown on the way.

Setup Instructions
------------------

We first need to clone _this_ repository. But there is a problem - we will need to `push` to this repository, but you don't have write access to it. So what do we do? We **fork**.

1. Go to this repository - [fed-bootcamp](https://github.com/CreateBootcamp/fed-bootcamp)
1. Click on "Fork". On the opening dialog, choose your private user.
1. And it's forked at `https://github.com/<your-username>/fed-bootcamp`

This new repo is a "fork" of the original repo. The simplest way to think of it, is that this is a _copy_ of the original repo.

Now let's clone it locally:

1. Click on "Clone or download" in the forked repo
1. Copy the _SSH_ URL
1. Go to the Git terminal (if you're on Windows, use "Git Bash"), and `git clone` it
1. cd into the created directory

This repo can now be `push`ed to. It won't affect the original repo.

1. Open the `fed-bootcamp` folder in your favorite IDE
1. Done!

Simple Exercise - edit, commit, and push
----------------------------------------

The purpose of this exercise is to get you used to git and editing.

Concepts Learned:

- Commits
- Stage
- Pushing

Commands Learned:

- `git add <files>`
- `git commit -m "message"`
- `git push`

1. Fix the typo in [my-first-markdown.md](/camp/Git/exercises/04-Real-World-Git-Markdown/my-first-markdown.md)
   by changing "Markown" to Markdown. You should commit & push the change, and see the change in Github.

  - Notice how Github shows the Markdown file in a nice way. This is because it ends with ".md" and has "Markdown" in it.

1. [Learn markdown](https://guides.github.com/features/mastering-markdown/).
   You can play with all the options locally by changing `my-first-markdown.md` and previewing it in your IDE.

1. Recreate [this markdown](/camp/Git/exercises/04-Real-World-Git-Markdown/recreate-this.md)
   into a file named `recreated.md` in the same directory.
   - Don't cheat by looking at the file! And don't forget to commit and push the change.
   - You should check how it looks in Github.

Branching Exercise - Feature Branches
-------------------------------------

Concepts Learned:

- Branches
- Checkout
- `master` branch
- Feature branch
- Pulling changes

Commands Learned:

- `git branch <branch>`
- `git checkout <branch>`
- `git merge <branch>`

To really understand branching, you need to work with other people. So pick another person, and do the exercise on one repo (theirs or yours). To do this, you need to add the other person as a collaborator:

1. Go to your repo in GitHub, and click on "Settings"
1. Click "Collaborators & teams" on the left panel
1. In the "Collaborators" box, put in the other person's GitHub username, and click "Add collaborator".
1. That's it, the other person can now use your repo
1. Have the other person `git clone` your repo

The exercises now will be different for your (User A) and your peer (user B).

### First Merge

User A:

1. Create a branch named `markdown-1` and switch to it (`checkout`)
1. In this branch, create a file `markdown-1.md` and put in an H1 heading named "Heading 1"
1. Now push your changes. Not a problem - those changes are in _your_ branch.
1. Merge your branch into `master`, commit, and push this change _before_ User B does their thing

User B:

1. Create a branch named `markdown-2` and switch to it (`checkout`)
1. Create a file `markdown-2.md` and put in an H1 heading named "Heading 1"
1. Now push your changes. Not a problem - those changes are in _your_ branch.
1. Merge your branch into `master`, commit, and push this change _after_ User B does their thing. This fails!
1. Fix the failure by pulling, and ensure your change gets pushed

Moral of the story: **always pull before you push!**

### Second Merge

User A (only!):

1. Go back to branch `markdown-1`
1. Edit `markdown-1.md` by adding the paragraph "This is a paragraph" underneath the heading
1. Now push your changes. Not a problem - those changes are in _your_ branch.
1. Merge your branch into `master`, commit, and push _after_ User B does their thing. This fails!
1. Fix the failure by pulling, and ensure your change gets pushed

### Working on the same file

Users A and B will work on the same file, but there should be no conflicts, so the merge will be a regular one.

User A:

1. Go back to branch `markdown-1`
1. Edit `markdown-1.md` - change the heading to "Heading to infinity!"
1. Now push your changes
1. Merge your branch into `master`, commit, pull, and push. If the push is rejected, fix, and push.

User B:

1. Go back to branch `markdown-2`
1. Edit `markdown-1.md` - change the paragraph to "This is a wonderful paragraph"
1. Now push your changes
1. Merge your branch into `master`, commit, pull, and push. If the push is rejected, fix, and push.

### Working on the same line

User A:

1. Go back to branch `markdown-1`
1. Edit `markdown-1.md` - change the heading to "Heading to A"
1. Merge your branch into `master`, commit, pull, and push.
   If the push is rejected, merge your conflict with your IDE, and push.

User B:

1. Go back to branch `markdown-2`
1. Edit `markdown-1.md` - change the paragraph to "Heading to B".
1. Merge your branch into `master`, commit, pull, and push.
   If the push is rejected, merge your conflict with your IDE, and push.

Now have the other user try to merge the conflict.

Pulling Changes from the Original Repository
--------------------------------------------

Concepts Learned:

- Remotes
- The `origin` remote
- The `upstream` remote

Commands Learned:

- `git remote -v`
- `git remote add <remote> <git-url>`
- `git pull <remote> <branch>`

The instructors have just updated this page with additional instructions,
but they are in the original repo and not your forked one. You need to get them and follow them:

1. Create a remote pointing to the original repo (usually named `upstream`)
1. Get the changes from the original repo. Remember! The changes are in the `master` branch.
1. Follow them.

What Have We Learned?
---------------------

- How to edit something, commit it, and push to server
- Creating and working with feature branches, including merging and merging conflicts
- Working with upstream repositories
