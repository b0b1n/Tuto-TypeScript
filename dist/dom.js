// getting an Input element
var myElement = document.querySelector("#someId");
console.log("my Element ", myElement.value);
// adding a Listener
var element1 = document.querySelector(".foo");
element1.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event ", event);
    console.log(" event.target.value", target.value);
});
