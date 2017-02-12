# Cheat Sheet for Arrays

- Defining arrays:

```js
const arr = [1, 2, 3];
console.log(arr); // 1 2 3
```

- Setting values:

```js
const arr = [1, 2, 3];
arr[1] = 999;
console.log(arr); // 1 999 3
```

- Iterating over indexes:

```js
const arr = ['a', 'b', 'c'];

for (const i in arr) {
  console.log(arr[i])
}
// a
// b
// c
```

- Iterating over values:

```js
const arr = ['a', 'b', 'c'];

for (const v in arr) {
  console.log(v);
}
// a
// b
// c
```

- Old-school iteration

```js
const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}
// a
// b
// c
```

- Length of array:

```js
const arr = ['a', 'b', 'c'];

console.log(arr.length); // 3
```

- isArrayEqual

```js
function isArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (const i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
```
