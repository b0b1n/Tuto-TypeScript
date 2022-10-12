// getting an Input element
const myElement = document.querySelector("#someId") as HTMLInputElement;

console.log("my Element ", myElement.value);

// adding a Listener
const element1 = document.querySelector(".foo");

element1.addEventListener("blur", (event) => {
  let target = event.target as HTMLInputElement;
  console.log("event ", event);
  console.log(" event.target.value", target.value);
});
