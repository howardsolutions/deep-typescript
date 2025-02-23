const carMarkers = ["ford", "toyota", "chevrolet"]

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    []
]

// Flexible types

const importantDates: (string | Date)[] = [
    new Date(),
    '2030-10-21'
]

importantDates.push("2023-20-1")
importantDates.push(new Date())