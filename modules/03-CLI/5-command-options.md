# Command options

* `cd ~`
* `ls -l`
* `-l` is a **command option** (I think it stands for "long")
* You can see all the options, and more, using `man ls`
* Many modern commands have a `-h` or `--help` option

## Removing files and directories

* `rm hi.txt`
* removes a file (or more)
* `rm praxis`
* Fails! Cannot remove a directory.
* `rmdir praxis/makes-perfect`
* `rmdir praxis`
* Fails! Cannot remove a non-empty directory
* `rm -r praxis`
* Works, but prompts for each deletion
* `rm -rf praxis` (or "rimraf")
* Be careful. BE VERY VERY CAREFUL.
  [Horror stories abound](https://www.reddit.com/r/webdev/comments/5rd79m/gitlab_employee_just_ran_rm_rf_on_their/).

# Summary

* **ls -l**: `-l` is the option in `ls` for "long format"
* **man _command_** - manual of a command
* **rm _file..._** - delete a file
* **rmdir _dir..._** - delete an empty directory
* **rm -rf _file... - delete a file or directory
