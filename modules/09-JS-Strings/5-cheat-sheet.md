# Cheat Sheet for Strings

## String functions

All string functions are immutable!

* **length**: the length of the string
* **startsWith(s)**: whether the strings starts with `s`
* **endsWith(s)**: whether the strings ends with `s`
* **indexOf(s)**: the location (index) of `s` within the string (or -1 if not found)
* **includes(s)**: whether the string includes the string `s`
* **replace(s1, s2)**: replaces all occurences of `s1` with `s2`
* **slice(startIndex, endIndex)**: the substring from `startIndex` to `endIndex`,
  not including `endIndex`
* **split(separator)**: splits the string into an array of strings, using `separator`.
* **trim()**: trims whitespace from the start and end of the string

## join

* **[...].join(separator)**: joins an array of strings to one string, with `separator` separating them

## String concatenation

Use `s1 + s2 + s3`

## String interpolation

Backticks!

```js
`..........${_any_expression}......`
```

## Iterating over characters of a string

* Using `for-of`

```js
for (const ch of str) {
  //...
}
```

* Using spread - `...`

```js
const arrayOfChars = [...str]
```
