const cities = ['Tel Aviv', 'Jerusalem', 'Haifa']

cities[2] = "B'eer Sheva"
console.log(cities) // ['Tel Aviv', 'Jerusalem', "B'eer Sheva"]

cities[3] = 'Nazareth'
console.log(cities)  // ['Tel Aviv', 'Jerusalem', "B'eer Sheva", 'Nazareth']

/**
 * Setting a value with the assignment operator
 * Setting a value even though const...
 * Appending to the array using the assignment operator
 * Double quotes due to single quotes in string
 */
/* eslint quotes: 0 */
