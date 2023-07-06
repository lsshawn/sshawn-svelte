# Coding Questions

# Linked List

Array is a collection of items stored in a memory location.

A linked list is like an array, expect the items are pointers to different location.

# OOP

Class: The blueprint (Animal)
Object: The object derived from blueprint (Dog)
Abstraction: Showing only the functionality without exposing the internal details
Encapsulation: To keep the data private and reusable in a class. 
Inheritance: Gaining all properties of its parent. `class Cat extends Animal`.
Polymorphism: Overriding or overloading a class method

OOP on Typescript: https://fireship.io/lessons/object-oriented-programming-with-typescript/

# How is a bubble sort algorithm implemented?

From the first element, if the current element is greater than the next element, swap them.

```
let unsorted = [234, 43, 55, 63, 5, 6, 235, 547];

for (let i = 0; i < unsorted.length; i++) {
  for (let j = 0; j < unsorted.length - i - 1; j++) {
    if (unsorted[j] > unsorted[j + 1]) {
      const temp = unsorted[j];
      unsorted[j] = unsorted[j + 1];
      unsorted[j + 1] = temp;
    }
  }
}
```

# Nth Fibonacci number

0, 1, 1, 2, 3, 5, 8...

```
const nth = 8;

let i = 0;
let prev = 0;
let current = 1;
let fibonacci = 0;

// assume first fibonacci is 1
while (i <= nth - 2) {
  fibonacci = prev + current;
  prev = current;
  current = fibonacci;
  i += 1;
}

console.log(current);
```

# How to print the first non-repeated character from a string?

```
const word = "geekforgeeks";

# Get count and get first unique

const dict = Array.from(word).reduce((prev, curr) => {
  if (Object.keys(prev).includes(curr)) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});

console.log(dict);
const uniques = Object.keys(dict).filter((key) => dict[key] === 1);
const firstUnique = uniques[0];
console.log(`TCL:  -> firstUnique `, firstUnique);
```

# Prime factors of a number

```
function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

let n = 999;
primeFactors(n);
```

# Regex

```
const str = "some/path/123";
const pattern = /(\d+)/i;
const match = str.match(pattern);
const id = match[1]; // '123'
console.log(id);
```

# Reverse String
```
let str = 'hello'

# javascript
const reversed = str.split('').reverse().join('')

# loop
const len = str.length
let reversed = ''
for (let i = str.length; i >= 0; i--) {
  reversed += str[i]
}

```
# Reverse Array

```
let input = ["A", "B", "C", "D", "E", "F"];
let output = [];

for (let i = input.length; i >= 0; i--) {
  output.push(input[i]);
}

console.log(output);
```

# Factorial

5! = 5 * 4 * 3 * 2 *1

```
function factorial(x) {
  if (x === 1) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}
```

# Binary search

Array is sorted.

```
function binarySearch(arr, x, start, end) {
  if (start > end) return
  
  let mid = Math.floor((start + end) / 2)
  
  if (arr[mid] === x) return mid
  
  const isSmallerThanMid = arr[mid] > x
  
  return isSmallerThanMid
    ? binarySearch(arr, x, start, mid - 1)
    : binarySearch(arr, x, mid + 1, end)
}

binarySearch(arr, 5, 0, arr.length - 1)
```

# Check prime number

Prime number is divisible by 1 and itself.

```
function isPrime(x) {
  if (x === 1) return true
  
  // 2 till the number - 1
  for (let i=2; i < x; i++) {
    if (x % i === 0) return false
  }
  
  return true
}
```

# Inversion of Control

Passing the control of instantiating a class to the caller so that you don't create dependency in the class.

# Referential transparency

Replacable code.

This is not referential transparency

```
def borrow(money: Int): Int = {
  money * 1.1
}
val twoGrandWI = borrow(1000) + borrow(1000)
```

# REST

Representational State Transfer

# SSR vs SPA

SPA/CSR: Render a blank page, then render the app and compile. May lead to XSS attack. Think GMAIL.

SSR: Send rendered HTML on request. May be slower because you're rendering on server and client.

SSG: Like SSR, but you render page at build time not request.

# Prototypes in Javascript

Parent object that contains common properties or methods.

```
function Person(name) {
  this.firstName = name
}
const father = new Person('Richard')
```

# CORS (Cross Origin Resource Sharing)

To prevent XSS.

# Blue/Green deployment


Blue is old code. Green is the new update.

I.e. split testing.




#

