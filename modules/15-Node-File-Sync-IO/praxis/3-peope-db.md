# People DB

Write a program that manages a database of people.

It accepts as parameters a command.

If command is 'list', it will show the list of people
If command is 'add', it will add a person
If command is 'delete', it will delete a person by index
If command is 'find', it will show the index of that person
if command is 'findByAge', it will show all the people of a certain age

Each person has

## Example

```bash
$ node people-db.js add Morgan Whitley 66
$ node peopld-db.js add Hugo Bear 68
$ node people-db.js add Miri Bortley 66
$ node people-db.js add Shira Bizmuth 77
$ node people-db.js list
1: Morgan Whitley 66
2: Hugo Bear 68
3: Miri Bortley 66
4: Shira Bizmuth 77
$ node people-db.js delete 2
Hugo Bear deleted
$ node people-db.js list
1: Morgan Whitley 66
2: Miri Bortley 66
3: Shira Bizmuth 77
$ node people-db.js find Miri Bortley
2: Miri Bortley 66
$ node people-db.js findByAge 66
1: Morgan Whitley 66
2: Miri Bortley 66
```
