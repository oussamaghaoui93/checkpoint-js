// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(' ');
}

// Array Functions

// Find Maximum
function findMaximum(arr) {
    return Math.max(...arr);
}

// Find Minimum
function findMinimum(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumOfArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

// Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n < 0) return 'Undefined for negative numbers';
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacciSequence(terms) {
    let sequence = [];
    let [a, b] = [0, 1];
    while (terms > 0) {
        sequence.push(a);
        [a, b] = [b, a + b];
        terms--;
    }
    return sequence;
}

// Example Usage
var s = "hello";
var t = [1, 5, 3, 9, 2];
// String Manipulation
console.log(reverseString(s));
console.log(countCharacters(s));
console.log(capitalizeWords(s + " world"));

// Array Functions
console.log(findMaximum(t));
console.log(findMinimum(t));
console.log(sumOfArray(t));
console.log(filterArray(t, x => x > 4));

// Mathematical Functions
console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacciSequence(5)); 
