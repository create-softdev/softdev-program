const cities = ['Tel Aviv', 'Jerusalem', 'Haifa']

const list = cities

cities[2] = 'Netanya'
console.log(cities)
console.log(list)

/**
 * An array variable is a *reference* to the array, it is not the array itself.
 * Two variables with the same array _point_ to the same array.
 * This is *not* like number or boolean, where the variable *is* the value.
 */
