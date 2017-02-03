# Configure Git

Before starting the real exercise, we have lots of setup to do. This exercise and others will set us up.

Git stores its configurations somewhere, and there are two things we need to configure.

1. username and email, which will appear in every commit (version) that you add
1. pull with rebase, which we can't explain because it is highly complex, but trust us - you need it.

## Configure user and email

* Open terminal
* Run the command below to configure your email

```sh
git config --global user.email "your_email@example.com"
```

* Replace _your_email@example.com_ with your email
* Run the command below to verify that it's OK

```sh
git config --global user.email
```

* Run the command below to configure your name

```sh
git config --global user.name "Your Name"
```

* Replace _Your Name_ with your name (English, preferably first and last name with Caps)
* Run the command below to verify that it's OK

```sh
git config --global user.name
```

## Configure pull rebase

* Run

```sh
git config --global pull.rebase true
```

* Run the command below to verify that it's OK

```sh
git config --global pull.rebase
```

* It's OK. Trust us. We can't explain yet what these things mean.

## Configure the `git ls` alias

* Run

```sh
git config --global alias.ls '!git --no-pager log --oneline --graph --decorate -n 20'
```
