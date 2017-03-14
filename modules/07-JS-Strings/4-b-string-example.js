function pluralize (str) {
  if (str.endsWith('y')) {
    return str.slice(0, str.length - 1) + 'ies'
  } else if (str.endsWith('us')) {
    return `${str.slice(0, str.length - 2)}ii`
  } else {
    return str + 's'
  }
}

if (pluralize('city') !== 'cities') {
  throw 'failed'
}
if (pluralize('cactus') !== 'cactii') {
  throw 'failed'
}
if (pluralize('board') !== 'boards') {
  throw 'failed'
}

/**
 * Example of using slice to take parts of a string and recombine them
 */
