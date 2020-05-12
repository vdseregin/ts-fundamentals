interface IPerson {
  name: string;
  age: number;
}

// Classes cam implements interfaces, by keyword "implements"
class Person implements IPerson {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


/* TS allows to use access modifier keywords
  - public - allows use to some field to everyone
  - protected - own class and subclasses
  - private - only class own
*/


class PersonTwo implements IPerson {
  constructor(
    public name: string,
    public age: number
  ) {
    // we don't needed to add additional fields to class 
  }
}


interface IWorker {
  position: string;
}


function getWork(name:string, address: string): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("some work");
  })
}

// Also the class fields can have default values, look at the address field
// If impossible init the filed in the constructor, but you sure this field inits in some function
// you can use "definite assignment assertion" - '!' modifier, look at the position field
class PersonThree implements IPerson {
  private address: string = "New York";
  private position!: string;

  constructor(
    public name: string,
    public age: number
  ) {}

  async init() {
    const workData = await getWork(this.name, this.address);
    this.position = workData;
  }
}



// TS allows to create abstract class
abstract class PersonFour implements IPerson {
  constructor(
    public name: string, public age: number
  ) {}

  abstract greeting(): string;
}


// implementation of abstract class
class Jain extends PersonFour {
  greeting(): string {
    return `Hello, ${this.name}`;
  }
}