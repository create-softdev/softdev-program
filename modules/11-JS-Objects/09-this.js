
const mexicans = {
  mexicanBalance: 10000,
  extractMoney: (howMuch) => {
    this.mexicanBalance -= howMuch

    return this.mexicanBalance
  }
}

const currentPresident = {
  firstName: 'Donald',
  lastName: 'Trump',
  tweet: (issue) => `${issue} is because of the Democrats. SAD!`,
  buildWall: function () {
    const mexicanNewBalance = mexicans.extractMoney(100)

    console.log(this.tweet('Mexican problem'))
    console.log(`Building wall with mexican money. All they have left is ${mexicanNewBalance}`)
  }
}

currentPresident.buildWall()

/**
 * this - the current object
 */

