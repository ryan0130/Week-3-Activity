// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

// const answers = [];
// for(let i = 0; i < questions.length; i++){
//     const promptAnswers = prompt(questions[i]);
//     answers.push(promptAnswers);
// }
// console.log(answers);

// =====================

// Write a function that takes in an the num Array.
// Remove all the odd number and multiply the rest by 3.
// Return the first number in the array

const num = [2,5,9,10,23];
function getNum(numArray) {
    const removeOdd = numArray.filter((a) => a % 2 === 0);
    const finalArray = numArray.map((a) => a * 3);
    console.log(finalArray);
}
console.log(getNum(num));

// ===================

// Create a function that will convert a Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9

function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius * 9) / 5 + 32;
    console.log(celsius + ' C is ' + celsiusInF + ' F');
}

function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit -32) * 5) / 9;
    console.log(fahrenheit + ' F is ' + fahrenheitInC + ' C');
}


//   ========================

// Write a function to find the longest word in the array

var words = ["cat", "pizza", "javascript"]

function longestWord(wordArray) {
    let longestWord = '';
    wordArray.forEach(function(word) {
        if(longestWord.length < word.length){
            longestWord = word;
        }
    })
    return longestWord;
}
console.log(longestWord(words));



// =============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string with no spaces (please account for upper and lower case letters)
// ex: 'The Batman' should return 'thbtmn'

function vowelCheck(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const wordAry = word.toLowerCase().split('').filter(function(letter){
        return letter !== " ";
    });
    const noVowels = wordAry.filter(function(letter){
        return !vowels.includes(letter);
    });
    return noVowels.join('');
}
console.log(vowelCheck('The Batman'));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split