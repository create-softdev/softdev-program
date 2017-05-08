function sum (array) {
  let result = 0

  for (const num of array) {
    result += num
  }

  return result
}

function max (array) {
  let result = 0

  for (const num of array) {
    if (num > result) {
      result = num
    }
  }

  return result
}

function fill (number, count) {
  const result = []

  for (let i = 0; i < count; ++i) {
    result.push(number)
  }

  return result
}

module.exports = {
  sum,
  max,
  fill
}
