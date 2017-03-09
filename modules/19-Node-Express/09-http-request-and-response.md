# HTTP Requests and Responses

How do requests and responses look like? This is important to understand this part of the program, and
important overall.

The samples here are copied from the previous example's post, with simplifications.

## HTTP Request

* Sample:

```http
POST /add HTTP/1.1
Host: localhost:3000
Content-Length: 7
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
Content-Type: application/x-www-form-urlencoded

a=4&b=5
```

* Three parts:
  * **Message line**: with the method, the path, and the HTTP version
  * **Headers**: a set of key values, that is metadata for the request. For example
    * **Content-Type**: what kind of data is sent - in what format.
    * **User-Agent**: what browser is sending the request
  * A dividing line, after which
  * **Body**: if it's not GET, there is a body, which is data that is sent by the request.

## HTTP Response

* Sample:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 30

<h1>The sum of 4 + 5 is 9</h1>
```

* Three parts:
  * **Status Line**: with the HTTP version, the status code, and the status message
  * **Headers**: a set of key values, that is metadata for the response. For example
    * **Content-Type**: what kind of data is sent back - in what format.
    * **Content-Length**: the length of the body of data
  * **Body**: the response itself.

## HTTP Status Codes

* **200**: everything is good
* **5xx**: server failure
  * **500**: internal server failure - software or hardware bug
* **4xx**: I can't give you the response, for various reasons:
  * **404**: not found
  * **401**: unauthorized
  * **405**: method not allowed - the url is OK, but you can't use that HTTP method on it
  * ...
* **3xx**: redirects. The browser should navigate to another URL. The URL is given in the `Location` header
  * **302**: redirect to another URL, but using GET (even if the original was a POST).

## Creating those response headers

* So who created those response headers? Not us!
* Answer is simple - this is what express does.
