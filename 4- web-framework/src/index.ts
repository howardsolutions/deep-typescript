import { User } from './models/User';

const user = new User({ name: "new record", age: 0 })

// console.log(user.get.call(user, "name"))

console.log(user.get("name"))