export function capitalizeWord(string) {
    let capitalized = string.at(0).toUpperCase() + string.substring(1).toLowerCase();
    return capitalized
}

export function reverseString(string) {
    let reversed = string.split('').reverse().join('');
    return reversed;
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

export function caesarCipher(word, value) {

    const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




    function shiftLetter(letter, shiftVal) {

        if (lowerAlphabet.indexOf(letter) !== -1) {
            // if item isn't in the array then its -1 

            const position = lowerAlphabet.indexOf(letter);

            let newPosition = (position + shiftVal) % 26;
            // index number returned with shiftval + position numbers added
            return lowerAlphabet[newPosition]

        } else if (upperAlphabet.indexOf(letter) !== -1) {
            const position = upperAlphabet.indexOf(letter);
            let newPosition = (position + shiftVal) % 26;
            return upperAlphabet[newPosition];
        } else {
            return letter;
        }

    }

    let splitWord = word.split('');


    let newArr = splitWord.map((word) => shiftLetter(word, value));

    return newArr.join('');




}

export function analyzeArray(arr) {

    const returnInfo = {

        average: arr.reduce((sum, num) => sum + num) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,

    }

    return returnInfo



}