function boolValue (a) {
  if (a) {
    console.log('truthy')
  } else {
    console.log('falsy')
  }
}

boolValue(0)    // falsy
boolValue(1)    // truthy
boolValue(3434) // truthy
boolValue('')   // falsy
boolValue('asdfklhsdfkjh')  // truthy
boolValue([])   // truthy
boolValue({})   // truthy

/*
** false/true vs. falsy/truthy
*/
