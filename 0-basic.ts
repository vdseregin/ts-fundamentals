// Declaration variable with type
const name: string = "Alex";
const age: number = 25;
let isStudent: boolean = false;


// Reassign variable
isStudent = true;

// If we try to change type by reassign we get error.
// isStudent = "yes";

// Declaration variable with string literal type.
// Is a type whose expected value is a string which
// should be equal to that of the string literal type.
function greeting(name: "Alex") {
  console.log(`Hello, ${name}`);
}

// If we try to pass name argument doesn't equal to literal type value
// we get error
// greeting("Max");
greeting(name);


// Definition of ARRAY
// For specify the type of array, we can use next constructions
// string[] or Array<number>. We can user any other type like string, boolean, object, custom types
const numberArray: Array<number> = [];


// We can define a tuple, which has a fixed length
const tuple: [number, string, boolean] = [1, 'Hello', false];

// If we try to assign an array that contains only numbers, so we get an error  
// tuple = [5, 5, 5,];


// Definition of OBJECT
// For specify the type of object, we can use next construction
// variable definition: {[keyName]: type;}
const person: {name: string; age: number} = {name: "Jessica", age: 26};

// Also we can specify optional property by (?)
const car: { mark: string; isBought?: boolean} = {mark: "Peugeot"};


// Definition of INTERFACE
// If we need reusable type, we can create an interface
interface Car {
  mark: string;
  isBought?: boolean;
};

const chevrolet: Car = {mark: "Chevrolet", isBought: true};


// INTERSECTION types
interface InfoWithPhone {
  phone: number;
  address: string;
}

interface InfoWithEmail {
  address: string;
  email: string;
}

interface Person {
  name: string;
  age: number;
  finishedSchool: boolean;
  info: InfoWithPhone|InfoWithEmail;
}

const Jack: Person = {
  name: "Jack",
  age: 14,
  finishedSchool: false,
  info: Math.random() > 0.5 ? {phone: 1234, address: "some street"} : {email:"some@email.com", address: "some street"}
};

// If we try to get info data, we can guarantee to get only address property. Because phone or email may not be.
console.log(Jack.info.address);


// UNION types
interface PersonWithFullContactInfo {
  name: string;
  age: number;
  finishedSchool: boolean;
  info: InfoWithPhone & InfoWithEmail;
}

// We must initialize all props from unified types
const Lucy: PersonWithFullContactInfo = {
  name: "Lucy",
  age: 22,
  finishedSchool: true,
  info: {
    address: "some street",
    email: "some@email.com",
    phone: 1235
  }
};

// we can access to all info fields
console.log(Lucy.info.address)
console.log(Lucy.info.email)
console.log(Lucy.info.phone)