// Returns nothing
var doSomething1 = function () {
    console.log("Void function called");
};
// Returns any Type (not recommended),
var doSomething2 = function () {
    console.log("Any function called");
};
// Returns something that will never happen
var doSomething3 = function () {
    throw new Error();
};
// Unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2: string = unknown;
console.log(vAny.foo());
// console.log(vUnkown. foo());
// Type assertion
var v1 = 10;
var v2 = 10;
var vv1 = v1;
var vv2 = v2;
var pageNumber = "1";
var numericPageNumber = pageNumber;
