# VI

VI is a text editor that is included in all the Unixes in the world. It is not GUI, and it is very strange.
We will explore the _basics_ here.

1. `vi package.json`
1. VI works in modes. You are now in vi mode.
1. Moving around with arrows. Or with hjkl.
1. To edit text, press `i`.
1. `i` is a vi command. It is the only command we will learn.
1. Now you can both edit text, and navigate.
1. To go back to vi mode, press ESC.
1. To save the file, goto command mode with `:`.
1. Now write `w` and Enter to execute command and exit command mode.
1. To quit, do `:q`
1. To save and quit, `:wq`
1. To quit without saving `:q!`

# Summary

1. **vi _file_** - edit a file
1. **i** - to move to input mode
1. **ESC** - to exit input mode
1. **:q** - exits vi
1. **:q!** - exits vi even if file is "dirty"
1. **:w** - writes file
1. **:wq** - write and quit
