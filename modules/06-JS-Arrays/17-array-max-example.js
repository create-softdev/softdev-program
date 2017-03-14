function findCityWithBiggestPopulation (cities, population) {
  let maxPopulationTillNow = 0
  let biggestCityTillNow = ''

  for (const i in cities) {
    if (population[i] > maxPopulationTillNow) {
      maxPopulationTillNow = population[i]
      biggestCityTillNow = cities[i]
    }
  }

  return biggestCityTillNow
}

const cities = ['Tel Aviv', 'Jerusalem', 'Haifa']
const population = [500000, 700000, 200000]

console.log(findCityWithBiggestPopulation(cities, population)) // Jerusalem

/**
 * Function that iterates over cities and population
*/
