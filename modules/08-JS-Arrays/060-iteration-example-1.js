const population = [500000, 700000, 200000]

for (const p of population) {
  console.log('check population ...', p)

  if (p >= 500000) {
    console.log('big!', p)
  } else {
    console.log('small!', p)
  }
}
// check population ... 500000
// big! 500000
// check population ... 700000
// big! 700000
// check population ... 200000
// small! 200000

/**
 * console.log(_Can_accept_multiple_values)
 * for-of with many statements
*/
