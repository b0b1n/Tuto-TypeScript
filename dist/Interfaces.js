var a = "Sohaib";
// function
var getFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
var userSkious = {
    firstName: "Sohaib",
    lastName: "Skious",
    age: 21
};
var userAitSeddik = {
    firstName: "SalahEddine",
    lastName: "Ait-Seddik",
    age: 0
};
var firstName = userSkious.firstName, lastName = userSkious.lastName;
console.log(getFullName(firstName, lastName));
