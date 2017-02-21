const cities = ['Tel Aviv', 'Jerusalem', 'Haifa']
const population = [500000, 700000, 200000]

for (const i in cities) {
  console.log('check population of', cities[i])

  if (population[i] >= 500000) {
    console.log('Big city!')
  }
}
// check population of Tel Aviv
// Big city!
// check population of Jerusalem
// Big city!
// check population of Haifa

/**
 * Iterating over multiple arrays in tandem
 * Can be done only with for-in!
*/
