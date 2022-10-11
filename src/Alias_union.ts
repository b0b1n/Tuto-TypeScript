// alias
type ID = string;
type myTag = string;

const myTags : myTag[] = ["Free", "paid"];

// union

interface User1Interface {
  idUser: ID;
  fullName: string;
  age: number;
}

let userName: string = "alex";
let page: string | number = "1";
let errorMessage: string | null = null;

const myUser: User1Interface | null = null;

// alias + union
type maybeTag = myTag | null ;

const myMaybeTag1 = "9o9o";
const myMaybeTag2 = null;