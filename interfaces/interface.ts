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


const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`broken: ${vehicle.broken}`);
}

printVehicle(oldCivic)







