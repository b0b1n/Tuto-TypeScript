let a: string = "Sohaib";
// function
const getFullName = (firstName: string, lastName: string): string => {
  return firstName + " " + lastName;
};

//interfaces

interface UserInterface {
  firstName: string;
  lastName: string;
  age: number;
}

const userSkious: UserInterface = {
  firstName: "Sohaib",
  lastName: "Skious",
  age: 21,
};

const userAitSeddik: UserInterface = {
  firstName: "SalahEddine",
  lastName: "Ait-Seddik",
  age: 0,
};

const { firstName, lastName } = userSkious;
console.log(getFullName(firstName, lastName));