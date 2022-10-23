// Chapter-1: console.log(), variables, comments, operators, first js app

// 1. variables - are placeholders to store info and data in your app, refers to the value stroed in it 
var urname ='Alice'; console.log(urname); //(var has 2 sides: reference(name), value(Alice)) tip - give descriptive name to var
// 2. comment - read only
// 3. operators - used to assign values, compare values, perform arithmetic operations
// * / ** + -

// 4. prompt() - built in js functionality that helps you get i/p from a user through the browser
food = Number(prompt('how much was the food?'))
tipPercentage = Number(prompt('tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tip amount', tipAmount)
console.log('total', total)
alert(tipAmount)
// 5. alert() is like prompt(), but it is only for output
// 6. JS var can hold diff data types: number, string, objects and more
// In this case, we handled num as text which caused this weird outcome.

// Chapter-2: Baby Weather App:
//Data Types, Build a weather app

// 7. user input

/* 7.1 data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* 8. Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* 9. Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

// 10. Conditionals: are used in statements to compare variables, values and/or data types. they always return a bool- true or false
// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// 11. Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'Wear your sunglasses 😎'

// let weather = prompt('How is the weather?')
let weather = 'rainy';
if (weather == 'rainy') {
  console.log('Grab your umbrella ☔')
} else {
  console.log('Wear your sunglasses 😎')
}

// Chapter-3: Functions
// Function, Dynamic functions, Tip Calculator App

// 12. Functions
// this is a function called 'sayMyName'
// 12.1 and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
    console.log('Alice')
    console.log('Dave')
  }
  sayMyName()
  //-----------------------
  // this is a function called "sayMyName2"
  // 12.2 it has 1 argument called `name`
  // does: it logs out your name to console
  function sayMyName2(name) {
    console.log(name)
  }
  sayMyName2('April')
//   --------------------
  function greeting(name) {
    // greet = 'hi ' + name + ', Nice to meet you!'
    // 12.3 template literals ``
    greet = `hi ${name}, Nice to meet you!`
    console.log(greet)
  }
  
  greeting('Alice')
//   --------------------------------------
  function sum(a, b) {
    // 12.4 return
    return a + b
  }
  
  num1 = sum(1, 2)
  console.log(num1)
//   ----------------------------------
  function calculateFoodTotal(food, tip) {
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
  }
  
  console.log(calculateFoodTotal(300, 20))
//   --------------------------------
  // ES6
  // 12.5 Arrow Functions =>
  // 12.5.1 arrow function with explicit return

 const sumArrow = (a, b) => {
    return a + b
  }
  
//   12.5.2 arrow function with implicit return
//   IMPORTANT: For implicit return, remove curly braces
  const sumArrow2 = (a, b) => a + b
  
  console.log(sumArrow2(10, 50))

// Chapter - 4: Arrays:
// Arrays, Dynamic Functions, Tip Calculator App, Basics of Arrays

// 13. Arrays
const groceries = ['🍌', '🍎', '🍊', '🍐']
console.log(groceries)

// grab the 2nd index
console.log(groceries[2])

// Array methods
groceries.push('🍪')
console.log(groceries)

groceries.push('🫐')
console.log(groceries)

// 14. Array Slice
// start from 0 INCLUSIVE and UP to 6 [0, 1, 2, 3, 4, 5]
console.log(groceries.slice(0, 6))

console.log(groceries.slice(1, 4))
// 15. array methods (slice, push, indexOf, length)
console.log(groceries.indexOf('🍐'))
console.log(groceries.length)

// 16. OBJECTS {}
// key: value pairs
const person = { 
  name: 'Leonardo', 
  shirt: 'white' 
}

// 17. access object: dot notation vs. bracket notation
console.log(person.name)
console.log(person.shirt)

// 18. bracket notation
console.log(person['name'])
console.log(person['shirt'])

// 19. assign object
person['phone'] = '1-222-333-4444'
console.log(person.phone)

console.log(person)

// 19.1 person2
const person2 = {
  name: 'Alice',
  shirt: 'black'
}

console.log(person2)
console.log(person2.name)
console.log(person2.shirt)

// 20. es6 arrow function (2 arguments)
// object
// 20.1. template literals
// methods Math.floor()
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.netWorth()} USD`

  return intro
}

console.log(introducer('Qazi', 'black'))
console.log(introducer('Leonardo', 'white'))
// -----------------------------------------
let fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
// ----------------
// 21. For Loop
for (let i=0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// 22. For..of loop
for (const fruit of fruits) {
  console.log(fruit)
}
// -----------
const numbers = [1, 2, 3, 4, 5, 6]
for (let i=0; i < numbers.length; i++) {
  console.log(numbers[i])
}
// ----------
const double = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number * 2)
  }

  return result
}

console.log(double([1, 2, 3, 4, 5, 6])) // [2, 4, 6, 8, 10, 12]
// 23. PRACTICE ARRAYS AND OBJECTS
const howManyLetters = (phrase) => {
  // counter
  let result = 0;
 
  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }

  return { result }
}

const phrase = prompt('write your phrase')

console.log(howManyLetters(phrase))
// ----------------
// letters in string
const letters = () => {
  const phrases = "Write once, run everywhere"

  for (const letter of phrases) {
    console.log(letter)
  }
}
letters()
// ---------
// add num
// [1, 2, 3, 4] // 10
// result = 0 // result = 1 // result = 3 // result = 6 // result = 10
const sumArray = (numbers) => {
  let result = 0;
  // for loop
  for (const number of numbers) {
    console.log(number)
    result += number
  }
  return { result }
}

const nums = [1, 2, 3, 4, 5]
console.log(sumArray(nums))
// sum up all numbers in array
const max = (numbers) => {
  let result = numbers[0]

  // loop
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }

  return { result }
}
console.log(max([1, 2, 3, 4, 5]))
// Letter Frequency
const letterFrequency = (phrase) => {
  // letterFrequency('haha') 👉 {'h': 2, 'a': 2}
  console.log(phrase)
  // make a `frequency` object {}
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
console.log(letterFrequency('lol, what are you doing later tonight lol, haha!'))

//wordFrequency('lol what lol') // 👉 {'lol': 2, 'what': 1}
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

const userInput = prompt('Write your sentence')
console.log(wordFrequency(userInput))
// incremental operators: ++, --, +=

// 24. Chapter - 8: Array Methods(HoF): // map(), filter(), reduce() // higher order functions
// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce

// 25. MAP
const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

console.log(doubleMap([1, 2, 3]))

// 26. filter([1,2,3,4,5,6], 3) 👉 [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4, 5, 6], 2))
const numbs = [1, 2, 3, 4, 5, 6]
console.log(numbs.filter(num => num > 4 || num < 2))

const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

let result = actors.filter(actor => actor.netWorth > 10)
console.log(result)
let names = result.map(actor => actor.name).join(', ')
console.log(names)
// 27. Reduce
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))
// -----------
const numbers1 = [1, 2, 3, 4]
const results = numbers1.reduce((a, b) => a + b, 0)
console.log(results)

// 28. Select a random element from an array
// randomFruit([1, 2]) 👉 2
// randomFruit([1, 2]) 👉 1
const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length)

  console.log(randomNumber)

  return fruits[randomNumber]
}

fruits = ['🍌', '🍎', '🍊', '🍐']
console.log(randomFruit(fruits))

// 29. if else if else
// rainy (1), sunny (-1), overcast (0)
const weatherScorer = (weather, weather2) => {
  let score

  if (weather == 'rainy' && weather2 == 'overcast') {
    score = 2
  } else if (weather == 'rainy') {
    score = 1
  } else if (weather == 'sunny') {
    score = -1
  } else {
    score = 0
  }

  return score
}

console.log(weatherScorer('rainy', 'sunny'))