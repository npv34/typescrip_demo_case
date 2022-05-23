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
            html += "<td><button class=\"btn btn-danger\">Delete</button></td>";
            html += "</tr>";
        });
        document.getElementById('list-user').innerHTML = html;
    };
    return UserManager;
}());
export { UserManager };
//# sourceMappingURL=UserManager.js.map