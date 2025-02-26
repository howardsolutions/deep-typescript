interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true
}

interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}

const drink = {
    color: "brown",
    barbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}


const printItem = (item: Reportable): void => {
    console.log(item.summary())
}

// printVehicle(oldCivic)

printItem(drink)





