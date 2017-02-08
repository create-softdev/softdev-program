const obj = {
  a: 4,
  b: [4, 5]
};

console.log(JSON.stringify(obj));

console.log(JSON.parse('{"a": 4, "b": [4, 5]}'));

/**
 * What is JSON? When is it used?
 *
 * The syntax is similar to JS, but with restrictions:
 *   * single quote for strings is not allowed.
 *   * Keys _must_ be surrounded by quotes.
 *
 * Usually, objects are sent, but theoretically arrays, strings, and primitives are OK.
 */
