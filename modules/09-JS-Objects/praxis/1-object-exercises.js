/**
 * Implement the following functions
 */

/**
 * Returns the name of the city with the highest population.
 * A city has the fields `population` and `name`
 *
 * maxPopulation({name: 'Haifa', population: 200000}, {name: 'Tel Aviv', population: 500000}) ==> 'Tel Aviv'
 */
function maxPopulation2 (city1, city2) {

}

const haifa = { name: 'Haifa', population: 200000 }
const telAviv = { name: 'Tel Aviv', population: 500000 }
const jerusalem = { name: 'Jerusalem', population: 750000 }

// Tests:
if (maxPopulation2(haifa, telAviv) !== 'Tel Aviv') {
  throw 'failed'
}

if (maxPopulation2(jerusalem, telAviv) !== 'Jerusalem') {
  throw 'failed'
}

/**
 * Returns the name of the city with the highest population from an array of cities.
 * A city has the fields `population` and `name`
 *
 * maxPopulation([{name: 'Haifa', population: 200000}, {name: 'Tel Aviv', population: 500000}]) ==> 'Tel Aviv'
 */
function maxPopulation (cities) {

}

// Tests:
if (maxPopulation([[haifa, telAviv, jerusalem]]) !== 'Jerusalem') {
  throw 'failed'
}
if (maxPopulation([[haifa, jerusalem, telAviv]]) !== 'Jerusalem') {
  throw 'failed'
}
if (maxPopulation([[telAviv, haifa]]) !== 'Tel Aviv') {
  throw 'failed'
}
if (maxPopulation([[haifa]]) !== 'Haifa') {
  throw 'failed'
}

/**
 * Returns a string with instructions on whether the players can play game of thrones
 * Remember, only adults (>= 18( can play.
 * A player has the fields `age` and `name`.
 *
 * canPlayGameOfThrones({age: 18, name: 'Hillel'}, {age: 19, name: 'Dima'}) ==> 'Hillel and Dima can play!'
 * canPlayGameOfThrones({age: 17, name: 'Hillel'}, {age: 19, name: 'Dima'}) ==> "Hillel and Dima can't play, because Hillel is too young!"
 * canPlayGameOfThrones({age: 19, name: 'Hillel'}, {age: 17, name: 'Dima'}) ==> "Hillel and Dima can't play, because Dima is too young!"
 * canPlayGameOfThrones({age: 17, name: 'Hillel'}, {age: 17, name: 'Dima'}) ==> "Hillel and Dima can't play, because they're both too young!"
 */
function canPlayGameOfThrones (player1, player2) {

}

// Tests:
// write the tests

/**
 * write a function that accepts an array of arrays, and turns them into objects, where
 * each inner array is a pair of key/values.
 *
 * objectFromPairs([['name', 'Donald Trump'], ['age', 70]]) ==> {name: 'Donald Trump', age: 70}
 */
function objectFromPairs (fieldPairs) {

}

// Tests:
const o1 = objectFromPairs([['name', 'Donald Trump'], ['age', 70]])
if (o1.name !== 'Donald Trump') {
  throw 'failed'
}
if (o1.age !== 70) {
  throw 'failed'
}

/**
 * returns whether two objects are the same.
 *
 * isObjectEqual({}, {}) ==> true
 * isObjectEqual({name: 'Donald', age: 70}, {age: 70, name: 'Donald'}) ==> true
 * isObjectEqual({name: 'Donald', age: 70, wife: 'Melania'}, {age: 70, name: 'Donald'}) ==> false
 *
 * Use Object.keys(o) to get an array of key names from an object,
 * and then iterate on them in tandem using a:
 * for (i in Object.keys(o1)) {
 * }
 *
 * In the body of the loop you can check for equality of the values in o1 and o2.
 */
function isObjectEqual (o1, o2) {

}

// Tests:
// write the tests...

/**
 * Bonus:
 *
 * Returns an object who's keys are the array elements, and whose value is the
 * number of times it appears in the array
 *
 * frequency(['a', 'b', 'a', 'b', 'a', 'a', 'c']) ==> {'a': 4, 'b': 2, 'c': 1}
 * frequency([]) ==> {}
 */
function frequency (arr) {

}

// Tests:
// write the tests...
