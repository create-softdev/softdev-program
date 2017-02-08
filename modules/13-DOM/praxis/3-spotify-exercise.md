Mission
=======

Write a page that shows all the pictures of all the artists named David Bowie.

You can use this URL:
`https://api.spotify.com/v1/search?q=bowie&type=artist`.

Just like in the Flickr exercise, the function `fetchSimple` is given to you to call the web api.

The view of the users should look hierarchical (nested `ul`/`li` is fine):

```html
Artist #1 Name
  Pic #1
  Pic #2
  Pic #3
Artist #2 Name
  Pic #1
  Pic #2
  Pic #3
...
```

Bonus
-----

- Make it look nice
- Have a form that requests the name of the artist, and then shows the information.
