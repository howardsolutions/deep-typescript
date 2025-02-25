class Vehicle {
    constructor() {

    }

    protected drive(): void {
        console.log("I can drive")
    }

    honk(): void {
        console.log("beep")
    }
}

class Car extends Vehicle {
    protected drive(): void {
        console.log("I can vroom")
    }
}

const car = new Car();

car.drive()

export { }; // This makes the file a module 