class ArrayOfNums {
    constructor(public collections: number[]) { }

    get(idx: number): number {
        return this.collections[idx]
    }
}

class ArrayOfString {
    constructor(public collections: string[]) { }

    get(idx: number): string {
        return this.collections[idx]
    }
}

class ArrayOfAnything<T> {
    constructor(public collections: T[]) { }

    get(idx: number): T {
        return this.collections[idx]
    }
}

new ArrayOfAnything<string>(['a', 'b', 'd'])

// Generic constraint

class House {
    print() {
        console.log("I am a house")
    }
}


interface Printable {
    print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printHouseOrCar<House>([new House()])