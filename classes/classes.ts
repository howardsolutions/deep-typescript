class Vehicle {

    constructor(public color: string) { }

    protected drive(): void {
        console.log("I can drive")
    }

    honk(): void {
        console.log("beep")
    }

    static haha() {
        console.log("haha from vehicle")
    }
}

const vehicle = new Vehicle("orange")


class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color);
    }

    protected drive(): void {
        console.log("I can vroom")
    }

    // haha() {
    //     console.log("haha from car")
    // }
}

const car = new Car("red", 4);

export { }; // This makes the file a module 