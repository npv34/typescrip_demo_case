import { User } from "./User.js";
import { UserManager } from "./UserManager.js";
var user = new User('admin', 'admin@gmail.com');
var user1 = new User('admin2', 'admin2@gmail.com');
var user3 = new User('admin3', 'admin3@gmail.com');
var userManager = new UserManager();
userManager.add(user);
userManager.add(user1);
userManager.add(user3);
userManager.showList();
//# sourceMappingURL=Main.js.map