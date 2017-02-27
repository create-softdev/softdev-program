const chalk = require('chalk')
const moment = require('moment')
const simplePackage = require('create-softdev-simple-package')

const theAnswer = simplePackage.theAnswerToLifeTheUniverseAndEverything()

console.log(chalk.green(theAnswer))

const declarationOfIndependence = moment([1948, 5, 4])

console.log(declarationOfIndependence.fromNow(),
  'have passed since the declaration of independence')
