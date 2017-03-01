# Cheat Sheet for NPM Packages

## Creating a Packages

* **npm init**: it will ask questions and create a `package.json`
* **npm init -y**: same, but won't ask questions and use the default answers.

## Installing Packages

* **npm install _package_ --save**: install a package and add it to the `package.json`
* **npm install _package_**: install a package to play with it, withouth adding it to `package.json`
* **npm install**: install all the packages that were added to the `package.json`
* **npm update**: updates the versions of all packages in `package.json` to their maximum available
  version according to the semver.

## Semantic vesioning (Semver)

* Pattern: **_major_._minor_._patch_**
* **Major version**: a breaking change from previous major version
* **Minor version**: no breaking changes, but adds new features
* **Patch version**: no breaking changes, no new features - only bug fixes.

### Versions in dependencies:

```json
{
  "dependencies": {
    "_package": "_version_"
  }
}
```

Where \_version\_ can be:

* **_major_._minor_._patch_**: only this version will be installed
* **^_major_._minor_._patch_**: only versions with the same _major_ will be acceptable
* **~_major_._minor_._patch_**: only versions with the same _major_._minor_ will be acceptable
