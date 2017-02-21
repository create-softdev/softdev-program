function validateEmail (email) {
  const parts = email.split('@')

  if (parts.length !== 2) {
    return false
  }

  const userName = parts[0]
  const domain = parts[1]

  return validateOnlyLettersAndDot(userName) && validateOnlyLettersAndDot(domain)
}

function validateOnlyLettersAndDot (str) {
  if (str.length === 0) {
    return false
  }
  for (const ch of str) {
    const isValid = ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch === '.'

    if (!isValid) {
      return false
    }
  }

  return true
}

if (validateEmail('hugh.grant@gmail.com') !== true) {
  throw 'failed'
}
if (validateEmail('Hugh.grant@Gmail.com') !== true) {
  throw 'failed'
}
if (validateEmail('hugo123@gmail.com') !== false) {
  throw 'failed'
}
if (validateEmail('hugh.grant') !== false) {
  throw 'failed'
}
if (validateEmail('@lalal') !== false) {
  throw 'failed'
}

/**
 * Example of validation
 */
/* eslint no-console: 0 */
