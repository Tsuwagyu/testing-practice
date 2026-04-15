letter must shift based on the inputted shiftValue

Shift letter function pseudocode
- if condition to ensure character is a letter from the array
- scenario, first letter starts with A, and the shiftValue is **3** that means it will be D
- array of alphabet stored
- shiftValue of 3 means to shift 3 alphabetical letters
- take in letter > find position in alphabet array with .indexOf(letter)
- take index value of current letter, add 3 

shift letter function wrap handler **DONE**
- if condition for if a letter is going to surpass the 25 total alphabet, then we need wrapping
- when a letter that needs to be shifted goes past z we need to loop back to the start of the array
- to loop back to the start of a fixed range we can use modulo operator %
- get the index value we'd be at if we didn't have a fixed range 
- use modulo operator to find remainder, (some sort of single digit number), that will be the new letter for the overextended letter

shift letter case preservation handling **DONE**
- right now letters with lowercase are handled
- new array containing all uppercase letters

caesarCipher functionality
- take in word, split it into its letter components
- store the split version of that word and call shiftLetter on it
- create a new array using `.map()` to then give us the new word
- store that array in a new variable, then use `.join()` on it
- return newly shifted word? idk

analyzeArray test
- goals: take in array of numbers and return an object with the following -
- object == { average: 4, min: 1, max: 8, length: 6 };
- properties
- average, min, max, length
- the useful functions 
