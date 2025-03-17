import { User } from './models/User';

const user = new User({ id: 1 })
// user.fetch()

// setTimeout(() => {
//   console.log(user)
// }, 3000) 

user.set({ name: "NEW NAME", age: 25 })
user.save()