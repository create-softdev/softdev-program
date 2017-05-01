# Mission

Write a page that shows the first 10 pictures of the artists given. Do not use the
`utils.js` from the theory. You should use XMLHttpRequest in a raw way.

You can use this URL:
`https://api.spotify.com/v1/search?q=___artist___&type=artist`.

## Hint

1. Create a nice HTML with an h1 that says "Images" or something
1. Write a loop that creates ten image elements, and fills them with one image,
   for example [this one](http://lorempixel.com/400/200/cats/2/here-kitty/) -
   note that this will generate a different image every time.
1. Now that you know that you can traverse and fill the images, let's try to bring the information
   from Spotify:
1. First, do a query with "bowie" as the artist. Use XHR.
   In the `load` handler, console.log the respone (it's long...)
1. Now `JSON.parse` the response and console.log it.
1. Go over the result and add the image urls to an array. console.log the array.
1. Slice the array down to 10 values
1. Use the code you used to create the ten images, and use the array instead.
1. Almost there. Breath, commit, and push.
1. Create an input for the artist name and a button.
   When clicking on the button, do the code, but the URL
   is not static - the artist will be embedded in the URL (use template strings)
   (***Important:*** the artist name must be used with encodeURIComponent(artistName), that
   encodes things like `=`, `&`, and blank)
1. You did it! Breath, commit, and push.
