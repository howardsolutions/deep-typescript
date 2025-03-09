// import { NumberCollection } from "./NumberCollections";
// import { CharacterCollections } from "./CharacterCollections";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./sorter";


// const numberOfCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberOfCollection);
// sorter.sort();
// console.log(numberOfCollection.data);


// const characterCollection = new CharacterCollections('Xaayb')
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500)
linkedlist.add(-10)
linkedlist.add(-3)
linkedlist.add(4)


const sorted = new Sorter(linkedlist)
sorted.sort();
linkedlist.print()