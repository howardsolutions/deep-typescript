let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green']

// Classes 

class Car {

}

let car: Car = new Car();

// Object literal
let p: { x: number, y: number } = {
    x: 10,
    y: 10
}

// function
const logNumber = (i: number): void => {
    console.log(i);
}

// when to use annotations and cant use type inference
// 1) Function that returns 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Declared a variable first on one line, and defer to assign a value later.
 

// 3) Variables whose type cannot be inferred correctly