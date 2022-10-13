var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = (Math.random() * 100).toFixed().toString();
    return __assign({ id: id }, obj);
};
var luser = {
    name: "LUSER",
    data: "myData",
    content: {
        meta: "myContent"
    }
};
var soUser = {
    name: "soUser",
    content: { meta: "object" },
    data: 12
};
var result = addId(soUser);
console.log("result", result);
