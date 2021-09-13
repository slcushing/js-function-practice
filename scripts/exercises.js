(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    let result;
    if (num1 > num2) {
      result = num1;
    } else {
      (num1 < num2)
      result = num2;
    }
    return result;
  }
// if (num1 > num2) {
//     return num1;
// } else {
//     return num2;
// }
  
  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1,num2,num3) {
    let largest;
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else (num3 > num1 && num3 > num2) 
    {
      return num3;
    }
    return largest
  }

  // if (num1 > num2 && num1 > num3){
  //   return num1;
  // } else if (num2 > num3) {
  //   return num2;
  // } else {
  //   return num3;
  // }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
    function isVowel(letter) {
      let result;
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        result = true;
      } else {result = false;
      }
      return result;
    }

// 'aeiou'.includes(char);

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
    function rovarspraket(text) {
        text = text.toLowerCase().split(""); // splits phrase into an array of letters : 'fun' => ['f', 'u', 'n'] ARRAY!
        for (let i = 0; i< text.length; i++) { // let (keeps within code block, NOT LEAK OUT)
          if('abcdfghjklmnpqrstvwxy'.includes(text[i])){ //using 'i' to index the array
            text[i] = text[i] + 'o' + text[i]; // 'f' => 'fof'; ['fof', 'u', 'non']
          } 
        }
        return text.join(""); //can call .join to call all indicies to slam them together
    }
      

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
   function sum([num1,num2,num3,num4]) {
     return (num1 + num2 + num3 + num4);
   }
   function multiply([num1,num2,num3,num4]) {
     return (num1 * num2 * num3 * num4);
   }
  
  //  function sum(arr){
  //    let sum = 0
  //     for(let i = 0; i < arr.length; i++) {
  //   // sum += arr[i];
  //   sum = sum + arr[i];
  // }
  // return sum;
  //  }

  // function multiply(arr) {
  //   let product = 1;
  //   for(let i = 0; i <arr.length; i++) {
  //     product = product * arr[i];
  //   }
  //   return product;
  // }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
   function reverse(str) {
     var splitString = str.split("");
     var reverseArray = splitString.reverse();
     var joinArray = reverseArray.join ("");
     return joinArray;
   };
//.shift and .unshift (look up on MDN) targeting the beginning of an array
//.push and .pop target the end of an array

// function reverst(str) { // happy
//   const strArray = [];

//   for (let i =; i < str.length; i++) {
//     strArray.unshift(str[i]); // .unshift adds to the BEGINNING
//   }
//   return strArray.join("");
// }

//  str.split("").reverse().join("");


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
   function findLongestWord(arr) {
    let length = 0; 
    for (let i = 0; i < arr.length; i++) { 
      if (arr[i].length > length) {
        length = arr[i].length;}
      }
    }
    return length;
    

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
 function filterLongWords(arr,i) {
      let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];}
      }
      return word;
     // finds the length of the longest word  
    };

    // function filterLongWords (arr,i) {
    //   const longWordsArr = [];
    //   for(let j = 0; j < arr.length; j++) {
    //     if(arr[j].length > i) {
    //       longWordsArr.push(arr[j]);
    //     }
    //   }
    //   return longWordsArr;
    // }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(string) {
    var freq = {};
    for (var i=0; i < string.length; i++) {
      var character = string.charAt(i);
      if (freq[character]) {
        freq [character]++;
      } else {
        freq[character] = 1;
      }
    }
    return freq;
  }

  // function charFreq(str) {
  //   const freqList = {}
  //   for (let i = 0; i < str.length; i++) {
  //     let testCase = str[i];
  //     if(freqList[testCase]) {
  //       freqList[testCase] = freqList[testCase] +1;
  //       //freqList[testCase]++;
  //     } else {
  //       freqList[testCase] = 1;
  //     }
  //   }
  //   return freqList;
  // }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
}) ();
