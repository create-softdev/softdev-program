# NPM Packages are Git Repos

Where do we store the source code for NPM packages? There are lots of ways. The most common
way, which we will use in the course, is to store each npm package in its own git repo.

## Creating a git repo

* So first we create a Git repo in Github, in your user. (demonstrate)
* Then `git clone` it.
* Then `npm init -y` it.
* Now we know how this works:
  * Edit, and publish
* But don't forget to push.
* The nice thing is that we can add the git repo to the `package.json`, using:

```json
{
  "repository" : {
    "type" : "git",
    "url" : "https://github.com/.....git"
  }
}
```

* Which means that when you publish the package, the npm page for it will show a link to the
  source code.

## Don't confuse between `npm publish` and `git push`

* One publishes the package for others to consume.
* The other pushes the _source code_ of the package.
* The source code can include files that are not needed, like `README.md`.

## npmignore

* How do we make `npm publish` not publish those files that are not source code?
* `.npmignore`!

```npmignore
README.md
```

* This file tells NPM which files to ignore (i.e. not publish) when publishing the module
