const formerPresident = {
  firstName: 'Barack',
  lastName: 'Obama',
  address: {
    hood: 'Kalorama',
    city: 'Washington',
    state: 'D.C.'
  }
}

console.log(formerPresident.address.state) // D.C.

// or...

const presidentAddress = formerPresident.address

console.log(presidentAddress.hood)        // Kalorama

/**
 * values
 */

