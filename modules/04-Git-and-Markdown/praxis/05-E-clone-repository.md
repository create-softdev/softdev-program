# Cloning the Softeng Repository

Finally you can clone the repository we've all been looking at.

We first need to clone _this_ repository.
But there is a problem - we will need to `push` to this repository,
but you don't have write access to it. So what do we do? We **fork**.

1. Go to this repository - [softend-program](https://github.com/create-softeng/program)
1. Click on "Fork". On the opening dialog, choose your private user.
1. And it's forked at `https://github.com/<your-username>/program`!

This new repo is a "fork" of the original repo.
The simplest way to think of it, is that this is a _copy_ of the original repo.

Now let's clone it locally:

1. Open your terminal.
1. Check your home directory. Does it have a space in it, or non-US letters (e.g. Hebrew, latin with accents)?
1. If so, cd to your root directory (`cd /`).
1. If not, you're good to stay in your home directory
1. Create a directory called `code` (or `work` or `projects` or `stuff`)
1. cd into it.
1. Now clone your repository, that you create above:
1. Goto that URL, find the green button and copy the **SSH** URL. If it is an HTTPS URL, change it in the GUI.
1. In the terminal, type `git clone` and the URL that you found (don't forget the space after `clone`).
1. cd into `program`
1. YOu're in!
1. Let's open it in VSCode:
1. Run `code .`
1. Yes!
