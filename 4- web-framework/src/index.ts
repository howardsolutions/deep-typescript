import { User } from "./models/User";
import { UserList } from "./views/UserList";

const users = User.buildUserCollection();

users.on("change", () => {
    const root = document.getElementById("root");

    if (root) {
        new UserList(root, users).render()
    }
})

users.fetch();
