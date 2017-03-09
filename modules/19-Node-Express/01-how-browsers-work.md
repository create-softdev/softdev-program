# How Browsers Work

* Client/Server
* Client = Browser
* Server = Web server
* We will discuss the anatomy of showing the page `https://en.wikipedia.org/wiki/Hello`.

## What's in a URL?

* URL = `https://en.wikipedia.org/wiki/Hello`
* **https**, **scheme**, or _how_ a client communicates with the server
  * **http**: the most common protocol, and the one used in 99.9999%
  * **https**: the secure version of http - the data between client and server is encrypted
  * **file**: when the "server" are the files on the local computer.
  * others - ftp, gopher... obscure and not important
* **en.wikipedia.org**, **address** or also **domain**, or where is the server
  * **en.wikipedia.org**: a domain name. It will get translated to a real address by the DNS system.
   (see below for an example of such translation using `nslookup`)
  * **91.198.174.192**: an IP address (IP stands for Internet Protocol). You may also hear of it as a
    TCP/IP address. Contains 4 numbers, each between 0-255. Always. All addresses on the Internet are of this
    form. (A few words about IPv6 are in order here, but only a few words.)
* **/wiki/Hello**: An additional **path** "into" the server. Just like a file system path.

Additionally, let's look at another URL: `https://www.youtube.com/watch?v=9bZkp7q19f0`

* Same thigngs - scheme, domain, path
* But then there's a `?....`
* That is called the `query`, and you can put whatever you want there, but usually it is of the form:
  `key=value&key=value&....`

Last, but not least, ports:

`https://en.wikipedia.org:443/wiki/Hello`

* The port is an addition to the domain (both together are called an _address_)
* The port is a number between 0 and 65535, and specify to which "socket" to connect on the server
* The same server can have many ports "open". Usually only two are open"
  * **80**: the default port for HTTP if not specified
  * **443**: the default port for HTTPS if not specified
* This is important, because when developing locally, we usually need more ports, so we open
  up ports other than 80 or 443.

## Browser to Server

This is a tour of what happens from the moment a user enters a URL in the address bar, until they see the page.
Let's assume the page is `https://www.youtube.com/watch?v=9bZkp7q19f0`.

1. The browser parses the URL and gets the domain.
1. The browser connects to a DNS server, and the domain is translated to an IP address via the DNS system.

```sh
$ nslookup en.wikipedia.org
Server:   10.0.0.138
Address:  10.0.0.138#53

Non-authoritative answer:
Name: en.wikipedia.org
Address: 91.198.174.192
```

1. The browser "opens a connection the the IP address and to the port". The code that handles the connection
   on the other side is called a "Web server". Think of it as similar to a telephone connection. You call,
   and then somebody picks up on the other side.
1. The browser then sends a command in a protocol called HTTP: `GET /watch"v=9bZkp7q19f0?`.
   This is called an **HTTP Request***, and the `GET` is called an **HTTP Method**.
1. The server reads the command and sends back the HTML in an **HTML Response**.
1. The browser shows the page, and looks for other stuff like images, videos, etc...
1. Each one of those has a URL, and it does for each of them what it did to the HTML, until it finishes all
   the resources in the page.
1. If the user clicks on a link, that link is a URL, and it goes back and does everything again.

And that's it. That is how the web works.

## 127.0.0.1 and localhost

* There is a special IP address, which is `127.0.0.1`
* And it has a special DNS entry, called `localhost`.
* It always points to the address of the local computer.
* We will be using it constantly in our work, just so you know
