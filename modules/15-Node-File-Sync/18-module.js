const directorsDb = require('./workfiles/directors-db')

directorsDb.initialize()
directorsDb.add({ firstName: 'Stanley', lastName: 'Kubrick' })
directorsDb.add({ firstName: 'Steven', lastName: 'Spielberg' })
directorsDb.add({ firstName: 'Wes', lastName: 'Anderson' })
directorsDb.add({ firstName: 'Steven', lastName: 'Soderbergh' })

console.log(directorsDb.findIndex({ firstName: 'Wes', lastName: 'Anderson' })) // 2

/**
 * Using a module - require(). If it's not built into Node, then it has to be a relative
 * path, in this case starting with a '.'
 *
 */
