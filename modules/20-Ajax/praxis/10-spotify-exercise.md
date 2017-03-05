# Mission

Write a page that shows the first 10 pictures of all the artists named Bowie.

You can use this URL:
`https://api.spotify.com/v1/search?q=bowie&type=artist`.

Use the function `fetchSimple`, which is given to you to call the web api.

The template HTML is given to you - you just need to fill up the imgs with the correct
src, using - `imgElement.src = _the_src_`.

## Hint

You should probably do it in steps:

1. Write a loop that goes over the ten images, and fills them with one image,
   for example [this one](http://lorempixel.com/400/200/cats/2/here-kitty/) -
   note that this will generate a different image every time.
1. Now that you know that you can traverse and fill the images, let's do the other thing:
   go over the json returned from the spotify URL. Goto that URL, and copy/paste
   the result into a variable in your code (yes, it's very long). Now write code that
   goes over the image and console.log-s it.
1. Now use fetchSimple, and just console.log the resulting JSON returned.
1. Now you have all the pieces of the puzzle, so combine them. Instead of console.log-thing
   the returned json, use the code that you wrote for traversing it, and console.log it.
1. Now that you have code that fetches and logs the image urls, you can fill the images
   instead of console.log-ing the urls.


## Bonus

* Make it look nice
* Have a form that requests the name of the artist, and then shows the information.
