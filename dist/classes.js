var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyUser = /** @class */ (function () {
    function MyUser(firstName, lastName) {
        if (firstName === void 0) { firstName = "first"; }
        if (lastName === void 0) { lastName = "last"; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    MyUser.prototype.changeSomeThing = function () {
        // this.someThing = "AZER";
    };
    MyUser.prototype.getFullName = function () {
        return "::> " + this.firstName + " " + this.lastName;
    };
    MyUser.nationality = "Moroccan";
    return MyUser;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.login = ["admin", "admin"];
        return _this;
    }
    Account.prototype.setLogin = function (log, pass) {
        this.login = [log, pass];
    };
    Account.prototype.getLogin = function () {
        return this.login;
    };
    return Account;
}(MyUser));
var user = new MyUser("Sohaib", "Skious");
var compt = new Account();
console.log(user.getFullName());
console.log(MyUser.nationality);
console.log(compt.getLogin());
