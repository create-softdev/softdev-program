let mexicanBalance = 10000

const mexicans = {
  extractMoney: (howMuch) => {
    mexicanBalance -= howMuch

    return mexicanBalance
  }
}

const currentPresident = {
  firstName: 'Donald',
  lastName: 'Trump',
  tweet: (issue) => `${issue} is because of the Democrats. SAD!`,
  buildWall: function () {
    const mexicanNewBalance = mexicans.extractMoney(100)

    console.log(`Building wall with mexican money. All they have left is ${mexicanNewBalance}`)
  },
  brag () {
    console.log('I am making America great again!')
  }
}

console.log(currentPresident.tweet('Mexican problem'))

currentPresident.buildWall()

currentPresident.brag()

/**
 * values can be functions
 * They are then called "methods"
 * Either regular 'function' or arrow functions
 * Also simplified object syntax - brag() {...}
 */

