// Returns nothing
const doSomething1 = (): void => {
  console.log("Void function called");
};
// Returns any Type (not recommended),
const doSomething2 = (): any => {
  console.log("Any function called");
};
// Returns something that will never happen
const doSomething3 = (): never => {
  throw new Error();
};

// Unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = unknown;

console.log(vAny.foo());
// console.log(vUnkown. foo());

// Type assertion

let v1: any = 10;
let v2: unknown = 10;
let vv1: string = v1;
let vv2: string = v2 as string;

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;
