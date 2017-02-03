# Setup SSH

This exercise will setup SSH between your machine and GitHub.
The Git protocol between the Git Server and your machine is usually secured with SSH
(the alternative is https, that requires to type a username and password for each action).

SSH security relies on a key pair - a public key, which you give to GitHub (or other services),
and a private key, which you guard closely and never ever give to anyone!

## Creating the public and private key

* Run the command below (don't forget to use your email). It will prompt you for stuff. Just press Enter.

```sh
ssh-keygen -t rsa -b 4096 -C "your_email!@example.com"
```

* The keys will be in `~/.ssh/id_rsa.pub` (public key), and `~/.ssh/id_rsa`
* Never EVER give your private key to anybody. Not even your BFF.
* Never EVER give your private key to anybody.
* Never EVER give your private key to anybody. Not even your BFF.
* Never EVER give your private key to anybody.
* Never EVER give your private key to anybody. Not even your BFF.
* Now run the following command:

```sh
eval "$(ssh-agent -s)"
```

## Sending the **public** key to Github

1. Easy, just follow the instructions in
   "[Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)"

## Create a Github repository and test your setup

To test the setup, let's create a repository in GitHub and clone it locally:

1. Click on your profile pic, and choose "Your profile"
1. In the tabs on this page, click "Repositories"
1. Put in "my-first-repo" (or whatever you like!) in the name, and click "Create repository"
1. You now have an empty repo
1. Copy the URL in the "Quick setup" (Remember - _it needs to be the SSH url_).
1. Open a command line.
1. Write `git clone`, but do not press enter
1. Now paste the URL you got from GitHub (with a space between it and `clone`)
1. Press enter
1. It should work!

You now have a git repo in the "my-first-repo" directory. It should be empty
