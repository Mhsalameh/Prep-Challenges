"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
//
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
  // write your code
  let output = [];
  let counter = 0;
  function pattern(n1, n2) {
    if (n1 > int1) {
      return output;
    } else if (counter < int1 / int2) {
      output.push(n1);
      counter++;
      return pattern(n1 - n2, n2);
    } else {
      output.push(n1);
      return pattern(n1 + n2, n2);
    }
  }
  return pattern(int1, int2);
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
//

const filterLinks = (str) => {
  // write your code here
  const searchUrlStart = "http://";
  const searchUrlEnd = str.includes(".com")
    ? ".com"
    : str.includes(".org")
    ? ".org"
    : ".net";
  console.log(searchUrlEnd);
  const indexOfStart = str.indexOf(searchUrlStart) + searchUrlStart.length;
  console.log(indexOfStart);
  const indexOfEnd = str.indexOf(searchUrlEnd) + searchUrlEnd.length;
  console.log(indexOfEnd);
  console.log(str);
  return str.slice(indexOfStart, indexOfEnd);
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
  // write your code here
  let regex = /[^0-9a-z]/gi;
  let result = str.replace(regex, "").toLowerCase();
  let reverseResult = result.split("").reverse().join("").toLowerCase();
  return result == reverseResult ? true : false;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX:
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
  // write your code here
  let wordObj={};
  let charObj={};

  if (str.length !== arr.length) return false
    str= str.split('');
        for (let i = 0; i<arr.length;i++) {
            let word=arr[i];
            let char=str[i];
            if (wordObj[word]!==char && wordObj[word]!==undefined) return false
            if (charObj[char]!==word && charObj[char]!==undefined) return false
            wordObj[word]=char;
            charObj[char]=word;
        }
        return true
};
// -------------------------------------------------------------------------------------------------------

module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };
