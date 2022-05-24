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
function updateButtonDelete() {
    var deleteUserButtons = document.getElementsByClassName('delete-user');
    var _loop_1 = function (i) {
        deleteUserButtons[i].addEventListener('click', function () {
            var index = deleteUserButtons[i].getAttribute('value');
            userManager.deleteUser(+index);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonDelete();
        });
    };
    for (var i = 0; i < deleteUserButtons.length; i++) {
        _loop_1(i);
    }
}
updateButtonDelete();
//# sourceMappingURL=Main.js.map