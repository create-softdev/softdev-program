const formerPresident = {
  'first-name': 'Barack',
  'last-name': 'Obama'
}

const currentPresident = {
  'first-name': 'Donald',
  'last-name': 'Trump'
}

console.log(currentPresident['first-name'], currentPresident['last-name']) // Donald Trump

function fullNameOfPresident (president) {
  return `${president['first-name']} ${president['last-name']}`
}

console.log(fullNameOfPresident(formerPresident))   // Barack Obama

/**
 * Properties are always strings.
 * They are a lot of times called keys.
 * Strings with non-identifier characters need single or double-quotes
 * accessing them is through [...]
 */
