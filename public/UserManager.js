var UserManager = /** @class */ (function () {
    function UserManager() {
        this._users = [];
    }
    UserManager.prototype.add = function (user) {
        this._users.push(user);
    };
    UserManager.prototype.showList = function () {
        var html = '';
        this._users.forEach(function (user, index) {
            html += "<tr>";
            html += "<td>".concat(index + 1, "</td>");
            html += "<td>".concat(user.getName(), "</td>");
            html += "<td>".concat(user.getEmail(), "</td>");
            html += "<td><button value=\"".concat(index, "\" class=\"btn btn-danger delete-user\">Delete</button></td>");
            html += "</tr>";
        });
        document.getElementById('list-user').innerHTML = html;
    };
    UserManager.prototype.deleteUser = function (index) {
        this._users.splice(index, 1);
        this.showList();
    };
    return UserManager;
}());
export { UserManager };
//# sourceMappingURL=UserManager.js.map