const population = [500000, 700000, 200000]

for (const i in population) {
  console.log('check population ...', i)

  if (population[i] >= 500000) {
    console.log('big!', population[i])
  } else {
    console.log('small!', population[i])
  }
}
// check population ... 0
// big! 500000
// check population ... 1
// big! 700000
// check population ... 2
// small! 200000

/**
 * Same iteration as in for-of
*/
