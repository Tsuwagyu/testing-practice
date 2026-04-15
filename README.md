# Testing Practice

A practice project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) focused on writing unit tests with Jest. Each function was built using a test-driven development (TDD) workflow — writing failing tests first, then implementing the code to make them pass.

## Functions

- **`capitalizeWord(string)`** - Returns the string with the first character capitalized.
- **`reverseString(string)`** - Returns the string reversed.
- **`calculator`** — An object containing `add`, `subtract`, `multiply`, and `divide` methods.
- **`caesarCipher(word, value)`** - Encrypts a string using a Caesar cipher. Handles wrap-around (`z` → `a`), preserves case, and leaves non-letter characters unchanged.
- **`analyzeArray(arr)`** - takes an array of numbers and returns an object with `average`, `min`, `max`, and `length`.

## Tools Used

- [Jest](https://jestjs.io/) — Testing framework
- [Babel](https://babeljs.io/) — For ESM `import`/`export` support in Jest