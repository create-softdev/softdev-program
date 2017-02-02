# more and Piping

## more

* Let's get a big file, say "Romeo and Juliette", by William Shakespeare
* curl http://www.gutenberg.org/files/1112/1112.txt > rnj.txt
* `cat rnj.txt`
* Too long...
* `more < rnj.txt`
* `<` is piping to the commands **input**

## Pipe

* Or... we can do this:
* `cat long.txt | more` - pipe the output of `cat` to the input of `more`

## grep

* `grep "Romeo dead" < rnj.txt`
* The text to search for is in quotes to make it _one_ parameter
* `grep Romeo < rnj.txt`
* Too long!
* `cat rnj.txt | grep Romeo | more`
* or...
* `cat rnj.txt | grep Romeo | less`

## wc and gender inequality

* Who appears more? Rome or Juliet?
* `cat rnj.txt | grep Romeo | wc`
* `cat rnj.txt | grep Juliet | wc`
* Sorry, ladies. Romeo wins.

# Summary

* **more < _file_** - show file with pagination
* **less < _file_** - more modern version of more
* **grep _text_ < _file_** - search for text in file
* **wc < _file_** - count lines, words, characters
* **cat _file_ | grep _text_** - different way to do grep
* **cat _file_ | grep _text_ | less** - paginate the results of grep
