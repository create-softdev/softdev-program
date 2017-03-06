function wordWrap (str, col) {
  let result = []
  let currentRow = []

  for (const currWord of str.split(' ')) {
    if (currentRow.join(' ').length + currWord.length > col) {
      result = result.concat(currentRow.join(' '))
      currentRow = [currWord]
    } else {
      currentRow = currentRow.concat(currWord)
    }
  }

  return result.concat(currentRow).join('\n')
}

console.log(wordWrap('abc x def ghiasdfasdf a', 5))
console.log('---')
console.log(wordWrap('abcdef abcde abc def', 5))
console.log('---')
console.log(wordWrap('abc abc abc', 5))
console.log('---')
console.log(wordWrap('a b c def', 5))
