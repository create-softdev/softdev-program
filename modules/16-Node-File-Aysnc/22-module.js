const directorsDb = require('./more/directors-db')

directorsDb.initializeDirectors((err) => {
  if (err) console.error(err)
  directorsDb.addDirector({ firstName: 'Stanley', lastName: 'Kubrick' }, (err) => {
    if (err) console.error(err)
    directorsDb.addDirector({ firstName: 'Steven', lastName: 'Spielberg' }, (err) => {
      if (err) console.error(err)
      directorsDb.addDirector({ firstName: 'Wes', lastName: 'Anderson' }, (err) => {
        if (err) console.error(err)
        directorsDb.listDirectors((err, directors) => {
          if (err) console.error(err)
          console.log(directors)   // [ { firstName: 'Stanley', lastName: 'Kubrick' },
          //   { firstName: 'Steven', lastName: 'Spielberg' },
          //   { firstName: 'Wes', lastName: 'Anderson' } ]
        })
      })
    })
  })
})

/**
 * Encapsulating it in a module.
 */
