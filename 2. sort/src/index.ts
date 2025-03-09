// import { NumberCollection } from "./NumberCollections";
import { CharacterCollections } from "./CharacterCollections";
import { Sorter } from "./sorter";

// const numberOfCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberOfCollection);
// sorter.sort();
// console.log(numberOfCollection.data);


const characterCollection = new CharacterCollections('Xaayb')
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);