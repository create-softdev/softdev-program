# Cheat Sheet for Objects

## Getting and Setting Attributes

* Getting Attributes

```js
const o = _some_object_;

o._some_attribute_
o[_some_string_with_an_attribute_]

// example
const o1 = {foo: 'bar', foo1: 'bar-none'}

o1.foo // 'bar'

const s = 'foo'

o1[s + '1'] // 'bar-none'
```

* Setting Attributes

```js
const o = _some_object_;

o._some_attribute_ = _some_value_
o[_some_string_with_an_attribute_] = _some_value_

// example
const o1 = {foo: 'bar', foo1: 'bar-none'}

o1.foo = 4

const s = 'foo'

o1[s + '1'] = 8

o1 // {foo: 4, foo1: 8}
```

## Function properties

* Defining functions properties:

```js
const o = {
  f1: function() {

  },

  f2: () => {

  },

  f3 () {

  }
}
```

* Calling functions properties:

```js

o.f1()
```

## this

When calling a function property, it is the object itself.

```js
const o = {
  f1() {
    console.log(this.x)
  }
}

o.x = 42;
o.f1() // 42
```
