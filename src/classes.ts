interface MyUserInterface {
  getFullName(): string;
}
class MyUser implements MyUserInterface {
  private firstName: string;
  protected lastName: string;
  readonly someThing: string;
  static readonly nationality: string = "Moroccan";

  constructor(firstName: string = "first", lastName: string = "last") {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  changeSomeThing() {
    // this.someThing = "AZER";
  }

  getFullName(): string {
    return "::> " + this.firstName + " " + this.lastName;
  }
}

class Account extends MyUser {
  private login: Array<string> = ["admin", "admin"];

  setLogin(log: string, pass: string) {
    this.login = [log, pass];
  }
  getLogin(): Array<string> {
    return this.login;
  }
}

const user = new MyUser("Sohaib", "Skious");
const compt = new Account();
console.log(user.getFullName());
console.log(MyUser.nationality);
console.log(compt.getLogin());
