// Generics are parameterized types.
// Generics allows to parameterize types like a function parameterize values

// type param determines the type of x
interface SubmitForm<T> {
  title: string;
  fields: T;
}


const form: SubmitForm<string[]> = {
  title: "Login",
  fields: ["name", "password"],
};

// Type parameters can have default type value
interface LandingPage<T = string[]> {
  title: string;
  sections: T;
}

const startPage: LandingPage = {
  title: "Shop",
  sections: ["About us", "Submit form"]
};

// Also type parameters can have constraints
function parseDataList<T extends {id: string}>(data: T[]) {
  for (let item of data) {
    console.log(item.id)
  }
}

// You can associate type parameters with scope 
function addPropsForData<T = {}>(data: T[]) {
  return function<V = {}>(props: V): (T & V)[] {
    return data.map(item => ({...item, ...props}));
  } 
}

const updatedData = addPropsForData([{id: 1}])({name: "Brooooo"});
updatedData[0].id;
updatedData[0].name;

