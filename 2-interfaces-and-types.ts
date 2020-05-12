// Type Alias
// Type alias allows you to use this type by name
type NumberOrBool = number|boolean;


// Interface
// Interface can be extended by another interface
interface Email {
  email: string;
}
interface Phone {
  phone: string
}

interface ContactInfo extends Email, Phone {
  name: string;
}

const test: ContactInfo = {
  name: "Jack",
  phone: "999",
  email: "jack@email.com"
}


// Describe call signatures
interface Greeting {
  (lang: string, name: string): string
}

type Greeting2 = (
  lang: string,
  name: string
) => void;

const greet1: Greeting = (lang, name) => `Hello, ${name}`;
const greet2: Greeting2 = (lang, name) => `Hello, ${name}`;

// Defined dictionary
// We need to assign undefined type for Person property,
// otherwise we'll access to item property without checking on exist this property
interface Persons {
  [id: string]: undefined | {
    name: string;
    age: number;
  }
}

const personsMap: Persons = {}

console.log(personsMap.test)

if (personsMap['Sam']) {
  console.log(`Person name - ${personsMap['Sam'].name}`)
}


//  
