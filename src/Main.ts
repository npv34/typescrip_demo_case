import {User} from "./User.js";
import {UserManager} from "./UserManager.js";

let user = new User('admin', 'admin@gmail.com')
let user1 = new User('admin2', 'admin2@gmail.com')
let user3 = new User('admin3', 'admin3@gmail.com')

let userManager = new UserManager();
userManager.add(user);
userManager.add(user1);
userManager.add(user3);

userManager.showList();
