// letter frequency
const letterFrequency = (phrase) => {
    // letterFrequency('haha') {'h': 2, 'a': 2}
    console.log(phrase)
    // make a 'frequency' object {}
    let frequency = {}
    for (const letter of phrase) {
      // check if letter exists in frequency
      if (letter in frequency) {
        // increment the value by +1
        frequency[letter] += 1
        // otherwise, set the value to 1
      } else {
        frequency[letter] = 1 
      }
    }
    return frequency
  }
  const wordFrequency = (phrase) => {
    const words = phrase.split(' ')
    return letterFrequency(words)
  }
  // const userInput = prompt('lol what lol yo yo yo') //console.log(userInput)
  console.log(wordFrequency('lol what lol yo yo yo')) //real time ex - autocompleting

// HOF
//   map
[1, 2, 3, 4].map(number => console.log(number))
// filter
const filter = (numbers, greaterThan) => {
    let result = []; for (const number of numbers) {
        if (number > greaterThan) { result.push(number) 
        } 
    } return result; 
}
console.log(filter([1, 2, 3, 4, 5, 6], 3));

true || false
true && false