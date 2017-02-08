function boolValue(a) {
  if (a) {
    console.log('truthy');
  }
  else {
    console.log('falsy');
  }
}

boolValue(0);
boolValue(1);
boolValue(3434);
boolValue('');
boolValue('asdfklhsdfkjh');
boolValue([]);
boolValue({});

/*
** false/true vs. falsy/truthy
*/
