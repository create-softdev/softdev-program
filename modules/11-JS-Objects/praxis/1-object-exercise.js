/**
 * Implement the function below. The test are already written.
 */
const books = [{
  author: 'Samuel R. Delany',
  title: 'Stars in my pockets like grains of sand',
  read: 2001
}, {
  author: 'J.K Rowling',
  title: 'Harry Potter and the philosoper\'s stone',
  read: 1998
}, {
  author: 'J.G. Ballard',
  title: 'Stars in my pockets like grains of sand',
  read: 2001
}, {
  author: 'Samuel R. Delany',
  title: 'Dhalgren',
  read: 2001
}, {
  author: 'Philip K. Dick',
  title: 'Do androids dream of Electric Sheep',
  read: 1998
}, {
  author: 'Margaret Atwood',
  title: 'The handmaiden\'s tale',
  read: 1997
}];

const result = authorsByYear(books);

if (result[2001].length !== 2) {
  throw 'failed';
}
if (!result[2001].includes('Samuel R. Delany')) {
  throw 'failed';
}
if (!result[2001].includes('J.G. Ballard')) {
  throw 'failed';
}
if (result[1998].length !== 2) {
  throw 'failed';
}
if (!result[1998].includes('J.K Rowling')) {
  throw 'failed';
}
if (result[1997].length !== 1) {
  throw 'failed';
}

// Implement the function below. Don't edit the lines above this one.
/**
 * Returns authors by year (sorted by author name), that given an array of objects like above,
 * will returns an object thus:
 * {
 *   2001: ['J.G. Ballard', 'Samuel R. Delany'],
 *   1998: ['J.K. Rowling', 'Philip K. Dick'],
 *   1997: ['Margaret Atwood']
 * }
 */
function authorsByYear(books) {

}
