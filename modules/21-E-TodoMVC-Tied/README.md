# TodoMVC - Completed

In this exercise, we will now combine the HTML/CSS done previously, with the Ajax/Server done.

## Steps

### Combine the two

1. Work in the todomvc you created earlier.
1. Start with the HTML/CSS you wrote in the TodoMVC-HTML
1. Add to it the server and the ajax code.

And it works! And it looks nice!

### Add Missing functionality

1. Add delete functionality
1. Add 'check completed' functionality

## Bonus

Write a chat app.

## Server

* Server-side it has two calls: `add-chat` and `list-chats` (which lists the last 100 calls)
* On the server, it needs to save only the last 100 chats, so if you push to the array of chats,
  and the array is larger than 100, you can pop it to make it 100 chats. That way your memory won't grow
  and grow.

## Client

* A very simple UI with the last 100 chats in li's, and an input field to enable the user to add to the chat
* The listing of the chats can happen once a second, using `setTimeout`. Be careful _not_ to use `setInterval` -
  use setTimeout, and only when you get back the list, do a `setTimeout` again. That way you won't have more
  than one request being sent to the server.

## Deploy

* Use [now](https://zeit.co/now) to deploy it, and play with your friends!
