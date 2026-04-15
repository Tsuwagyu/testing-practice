import { analyzeArray, capitalizeWord, reverseString, calculator, caesarCipher } from "./script";



test('String is capitalized', () => {
    expect(capitalizeWord('hello')).toMatch(/^[A-Z]/);
});

test('String is reversed', () => {
    let firstInput = 'hello';
    let reversedInput = 'olleh';
    expect(reverseString(firstInput)).toBe(reversedInput);

});

test('calculate the correct number combination', () => {

    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(2, 3)).toEqual(-1);
    expect(calculator.multiply(2, 3)).toEqual(6);
    expect(calculator.divide(2, 3)).toBeCloseTo(0.67);

});

test('not encrypted correctly',() => {
    expect(caesarCipher('Test', 3)).toBe('Whvw');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('calculate average, min, max, length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1, 
        max: 8, 
        length: 6
    });
});

