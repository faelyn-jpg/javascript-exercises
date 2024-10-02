const palindromes = function (sentence) {
  let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let cleanSentence = sentence
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')

  let reverseSentence = cleanSentence.split('').reverse().join('')
  return cleanSentence === reverseSentence
}

// Do not edit below this line
module.exports = palindromes
