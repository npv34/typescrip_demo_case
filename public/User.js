var User = /** @class */ (function () {
    function User(name, email) {
        this._name = name;
        this._email = email;
    }
    User.prototype.getName = function () {
        return this._name;
    };
    User.prototype.setName = function (name) {
        this._name = name;
    };
    User.prototype.getEmail = function () {
        return this._email;
    };
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map