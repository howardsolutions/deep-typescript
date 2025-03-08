import { NumberCollection } from "./NumberCollections";
import { Sorter } from "./sorter";

const numberOfCollection = new NumberCollection([10, 3, -5, 0])
const sorter = new Sorter(numberOfCollection);
sorter.sort();
console.log(numberOfCollection.data);