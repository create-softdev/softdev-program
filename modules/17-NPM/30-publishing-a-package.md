# Publishing the package

## Registering and logging in

* To publish a package, you need a user in the [npm registry](https://www.npmjs.com/)
* Sign up as a user in the site.
* Once you're signed in, you need to log in from the command line:

```sh
$ npm login
Username: _your_username_in_npmjs_
Password: *****
Email: (this IS public) _the_email_you_signed_up_with_
Logged in as giltayar on https://registry.npmjs.org/.
```

* NPM saves the login information (encrypted) in the file `~/.npmrc`, so you don't need to relogin.

## Publishing a package

* Publishing a package is easy!

```sh
$ npm publish
create-softdev-directors-db@1.0.0
```

* That's it!
* In the next 24 hours, you can still delete the published package.
* After that - it's there forever and ever. You can publish different versions of it, but it's there to stay.

