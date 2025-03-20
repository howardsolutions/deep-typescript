
import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.fetch()

collection.on("change", () => {
  console.log(collection)
})
