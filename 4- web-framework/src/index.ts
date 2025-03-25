import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: "NAMMEE", age: 21 })

const userForm = new UserEdit(document.getElementById("root")!, user)

userForm.render()
