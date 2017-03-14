const president = {
  firstName: 'Donald',
  lastName: 'Trump',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

console.log(president.fullName()) // Donald Trump

/**
 * this - the current object
 */

