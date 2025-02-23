const drink = {
    color: "red",
    carbonated: true,
    sugar: 40
}

// Type alias for Drink tuple
type Drink = [string, boolean, number]

// Tuple
const pepsi: Drink = ['red', true, 40];

// pepsi[0] = false

const sprite: Drink = ['clear', false, 40];