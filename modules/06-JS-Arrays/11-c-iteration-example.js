const cities = ['Tel Aviv', 'Jerusalem', 'Haifa']
const population = [500000, 700000, 200000]

const bigCities = []

for (const i in cities) {
  console.log('check population of', cities[i])

  if (population[i] >= 500000) {
    bigCities.push(cities[i])
  }
}
console.log(bigCities)
// check population of Tel Aviv
// check population of Jerusalem
// check population of Haifa
// ['Tel Aviv', 'Jerusalem']

/**
 * Iterating over multiple arrays in tandem
 * Creating another array from the iteration
*/
